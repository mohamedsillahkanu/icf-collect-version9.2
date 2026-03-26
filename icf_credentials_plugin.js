/**
 * ICF Collect — Form User Login Plugin v3.0
 * ==========================================
 * Drop-in replacement for icf_credentials_plugin.js
 *
 * FIXES:
 *  1. Header hidden on auth screen, shown after login
 *  2. Signup / login / forgot password all work
 *  3. Form Users panel in Properties sidebar (settings, not a form field)
 *  4. Users embedded in share URL via pako intercept
 *  5. Shared form shows login gate if users set
 *  6. One-time sign-in per device (persists until logout)
 *  7. Cascade CORS error no longer blocks share
 *  8. cascadeuser field uses TEXT input (not dropdown)
 */

(function () {
    'use strict';

    // CSS
    var style = document.createElement('style');
    style.textContent = [
        '.header { display: none; }',
        '#formUsersPanel { padding:13px; background:#f8faff; border:1px solid #d0e0f5; border-radius:8px; margin-bottom:14px; }',
        '#shareNote { font-size:12px; margin-top:8px; padding:8px 12px; border-radius:6px; display:none; }',
        '#sharedFormLoginGate { position:fixed; top:0; left:0; right:0; bottom:0; background:linear-gradient(135deg,#004080,#001a33); display:none; justify-content:center; align-items:center; z-index:9999; padding:20px; font-family:"Oswald",Arial,sans-serif; }',
        '#sharedFormLoginGate.show { display:flex; }',
        '.sfg-card { background:#fff; border-radius:16px; box-shadow:0 20px 40px rgba(0,0,0,.3); padding:36px 32px; width:100%; max-width:420px; }',
        '.sfg-logo { text-align:center; margin-bottom:22px; }',
        '.sfg-logo img { width:65px; border-radius:10px; margin-bottom:10px; display:block; margin-left:auto; margin-right:auto; }',
        '.sfg-logo h2 { margin:0 0 4px; font-size:22px; color:#004080; font-weight:700; }',
        '.sfg-logo p  { margin:0; font-size:12px; color:#888; }',
        '.sfg-sbar { background:#e8f4fc; border:1px solid #bee3f8; border-radius:8px; padding:11px 14px; margin-bottom:13px; font-size:12px; color:#004080; display:flex; justify-content:space-between; align-items:center; }',
        '.sfg-fmsg { padding:9px 13px; border-radius:6px; font-size:13px; margin-bottom:13px; display:none; }',
        '.sfg-fmsg.error   { background:#fff0f0; border:1px solid #ffcccc; color:#cc0000; display:block; }',
        '.sfg-fmsg.success { background:#f0fff4; border:1px solid #c3e6cb; color:#155724; display:block; }',
        '.sfg-fields { display:flex; flex-direction:column; gap:13px; }',
        '.sfg-group label { display:block; font-size:11px; font-weight:700; color:#444; margin-bottom:4px; text-transform:uppercase; letter-spacing:.5px; }',
        '.sfg-group input { width:100%; padding:11px 13px; border:2px solid #d0d9e8; border-radius:8px; font-size:14px; box-sizing:border-box; font-family:"Oswald",sans-serif; }',
        '.sfg-group input:focus { outline:none; border-color:#004080; box-shadow:0 0 0 3px rgba(0,64,128,.1); }',
        '.sfg-btn { background:#004080; color:#fff; border:none; border-radius:8px; padding:13px; font-size:15px; font-weight:700; cursor:pointer; font-family:"Oswald",sans-serif; width:100%; }',
        '.sfg-btn:hover { background:#003060; }',
        '@keyframes sfgShake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} }',
        '.sfg-shake { animation:sfgShake .45s ease; }'
    ].join('\n');
    document.head.appendChild(style);

    document.addEventListener('DOMContentLoaded', function () {

        // Login gate HTML
        var notif = document.getElementById('notification');
        if (notif) {
            notif.insertAdjacentHTML('beforebegin',
                '<div id="sharedFormLoginGate">' +
                  '<div class="sfg-card">' +
                    '<div class="sfg-logo">' +
                      '<img src="https://github.com/mohamedsillahkanu/gdp-dashboard-2/raw/6c7463b0d5c3be150aafae695a4bcbbd8aeb1499/ICF-SL.jpg" alt="ICF-SL">' +
                      '<h2 id="sfgFormTitle">ICF Collect</h2>' +
                      '<p id="sfgFormSubtitle">Sign in to access this form</p>' +
                    '</div>' +
                    '<div id="sfgSessionBar" class="sfg-sbar" style="display:none;">' +
                      '<span>&#10003; Signed in as <strong id="sfgSessionUser"></strong></span>' +
                      '<button onclick="sfgLogout()" style="padding:4px 10px;background:#dc3545;color:white;border:none;border-radius:4px;cursor:pointer;font-size:11px;font-family:Oswald,sans-serif;">Logout</button>' +
                    '</div>' +
                    '<div id="sfgFMsg" class="sfg-fmsg"></div>' +
                    '<div id="sfgLoginForm" class="sfg-fields">' +
                      '<div class="sfg-group">' +
                        '<label>Username</label>' +
                        '<input type="text" id="sfgUsername" placeholder="Enter your username" autocomplete="username" onkeydown="if(event.key===\'Enter\') document.getElementById(\'sfgPassword\').focus()">' +
                      '</div>' +
                      '<div class="sfg-group">' +
                        '<label>Password</label>' +
                        '<input type="password" id="sfgPassword" placeholder="Enter your password" autocomplete="current-password" onkeydown="if(event.key===\'Enter\') sfgLogin()">' +
                      '</div>' +
                      '<button class="sfg-btn" onclick="sfgLogin()">Sign In &#8594;</button>' +
                    '</div>' +
                  '</div>' +
                '</div>'
            );
        }

        // formUsersPanel at top of properties
        var props = document.getElementById('propertiesPanel');
        if (props && !document.getElementById('formUsersPanel')) {
            var d = document.createElement('div');
            d.id = 'formUsersPanel';
            props.insertBefore(d, props.firstChild);
        }

        // shareNote in share modal
        var qrA = document.querySelector('#shareModal .qr-actions');
        if (qrA && !document.getElementById('shareNote')) {
            var pn = document.createElement('p');
            pn.id = 'shareNote';
            qrA.after(pn);
        }

        setTimeout(_hookAll, 500);
    });

    function _hookAll() {

        // Show header + render users panel after login
        var _osb = window.showBuilder;
        if (typeof _osb === 'function') {
            window.showBuilder = function () {
                _osb.apply(this, arguments);
                var h = document.querySelector('.header');
                if (h) h.style.display = 'flex';
                setTimeout(renderFormUsersPanel, 150);
            };
        }

        // Hide header on logout
        var _olo = window.logout;
        if (typeof _olo === 'function') {
            window.logout = function () {
                var h = document.querySelector('.header');
                if (h) h.style.display = 'none';
                _olo.apply(this, arguments);
            };
        }

        // Swallow cascade CORS errors
        if (typeof window.saveCascadeDataToCloud === 'function') {
            var _osc = window.saveCascadeDataToCloud;
            window.saveCascadeDataToCloud = async function () {
                try { return await _osc.apply(this, arguments); }
                catch (e) {
                    console.warn('[Plugin] Cascade save skipped:', e.message);
                    if (typeof notify === 'function') notify('Cascade save skipped \u2014 link still works', 'warning');
                    return false;
                }
            };
        }

        // shareForm: embed users in pako payload
        var _osf = window.shareForm;
        if (typeof _osf === 'function') {
            window.shareForm = async function () {
                var store = (typeof safeStorage !== 'undefined') ? safeStorage : localStorage;
                var users = [];
                try { users = JSON.parse(store.getItem('icfFormUsers') || '[]'); } catch (e) {}

                if (window.pako && typeof window.pako.deflate === 'function') {
                    var _od = window.pako.deflate;
                    window.pako.deflate = function (data) {
                        window.pako.deflate = _od;
                        try {
                            var p = JSON.parse(data);
                            if (p && p.s) p.s.users = users;
                            return _od(JSON.stringify(p));
                        } catch (e) { return _od(data); }
                    };
                }

                await _osf.apply(this, arguments);

                var note = document.getElementById('shareNote');
                if (note) {
                    if (!users.length) {
                        note.textContent = '\u26a0\ufe0f No users \u2014 form is open to everyone.';
                        note.style.background = '#fff3cd'; note.style.color = '#856404';
                    } else {
                        note.textContent = '\ud83d\udd12 ' + users.length + ' user(s) set \u2014 sign-in required.';
                        note.style.background = '#d4edda'; note.style.color = '#155724';
                    }
                    note.style.display = 'block';
                }
            };
        }

        // renderSharedForm: check embedded users
        var _orf = window.renderSharedForm;
        if (typeof _orf === 'function') {
            window.renderSharedForm = async function (data) {
                var eu = (data && data.s && data.s.users) ? data.s.users : [];
                window._sfgFormUsers = eu;
                window._sfgFormId = ((data && data.s && data.s.t) || 'form')
                    .replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');

                var te = document.getElementById('sfgFormTitle');
                var se = document.getElementById('sfgFormSubtitle');
                if (te) te.textContent = (data && data.s && data.s.t) || 'ICF Collect';
                if (se) se.textContent = eu.length > 0 ? 'Sign in to access this form' : '';

                if (eu.length > 0) {
                    var sk = 'icfSession_' + window._sfgFormId;
                    try {
                        var saved = localStorage.getItem(sk);
                        if (saved) {
                            var sess = JSON.parse(saved);
                            if (eu.some(function (u) { return u.username === sess.username; })) {
                                document.getElementById('sfgSessionBar').style.display = 'flex';
                                document.getElementById('sfgSessionUser').textContent = sess.username;
                                document.getElementById('sfgLoginForm').style.display = 'none';
                                var mg = document.getElementById('sfgFMsg');
                                if (mg) { mg.textContent = '\u2713 Signed in as ' + sess.username; mg.className = 'sfg-fmsg success'; }
                                document.getElementById('sharedFormLoginGate').classList.add('show');
                                var vc = document.getElementById('viewerContainer');
                                var _oa = vc.classList.add.bind(vc.classList);
                                vc.classList.add = function (c) { if (c === 'show') { vc.classList.add = _oa; return; } _oa(c); };
                                await _orf.call(this, data);
                                setTimeout(function () {
                                    document.getElementById('sharedFormLoginGate').classList.remove('show');
                                    vc.classList.add('show');
                                }, 1200);
                                return;
                            }
                        }
                    } catch (e) {}

                    document.getElementById('sfgSessionBar').style.display = 'none';
                    document.getElementById('sfgLoginForm').style.display  = 'flex';
                    var mg2 = document.getElementById('sfgFMsg');
                    if (mg2) { mg2.className = 'sfg-fmsg'; mg2.style.display = 'none'; }
                    document.getElementById('sharedFormLoginGate').classList.add('show');
                    var vc2 = document.getElementById('viewerContainer');
                    var _oa2 = vc2.classList.add.bind(vc2.classList);
                    vc2.classList.add = function (c) { if (c === 'show') { vc2.classList.add = _oa2; return; } _oa2(c); };
                    await _orf.call(this, data);
                } else {
                    await _orf.call(this, data);
                }
            };
        }

        // renderCascadingUserField: text input
        window.renderCascadingUserField = function (field) {
            var cd = window.cascadingUserData;
            if (cd && cd.currentUser) {
                var u = cd.currentUser, cols = cd.hierarchyColumns || [];
                var rows = cols.map(function (c) {
                    return '<div style="display:flex;justify-content:space-between;padding:3px 0;font-size:12px;"><strong style="color:#004080;">' + c + ':</strong><span>' + ((u.hierarchy && u.hierarchy[c]) || '') + '</span></div>';
                }).join('');
                return '<div class="viewer-field" data-field-name="' + field.name + '">' +
                    '<label class="viewer-field-label">' + _e(field.label) + '</label>' +
                    '<div style="background:#e8f4fc;border:2px solid #004080;border-radius:8px;padding:14px;">' +
                    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">' +
                    '<span style="font-weight:700;color:#004080;">&#10003; Logged in as ' + _e(u.name) + '</span>' +
                    '<button type="button" onclick="logoutCascadingUser()" style="padding:5px 12px;background:#dc3545;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;">Logout</button>' +
                    '</div>' + (field.showHierarchy !== false && rows ? '<div style="background:white;border-radius:6px;padding:10px;">' + rows + '</div>' : '') +
                    '<input type="hidden" name="' + field.name + '" value="' + _e(u.username) + '"></div></div>';
            }
            var noU = !cd || !cd.users || cd.users.length === 0;
            return '<div class="viewer-field" data-field-name="' + field.name + '">' +
                '<label class="viewer-field-label">' + _e(field.label) + '</label>' +
                '<div style="background:#f8f9fa;border:2px solid #dee2e6;border-radius:8px;padding:14px;">' +
                (noU ? '<div style="background:#fff3cd;padding:9px;border-radius:6px;font-size:11px;color:#856404;margin-bottom:10px;">&#9888; No users loaded. Upload Excel in builder.</div>' : '') +
                '<div style="margin-bottom:10px;"><label style="display:block;font-size:10px;font-weight:700;color:#555;margin-bottom:3px;text-transform:uppercase;">Username</label>' +
                '<input type="text" id="sfgCUU_' + field.id + '" placeholder="Enter username" onkeydown="if(event.key===\'Enter\') document.getElementById(\'sfgCUP_' + field.id + '\').focus()" style="width:100%;padding:10px 12px;border:2px solid #dee2e6;border-radius:6px;font-family:Oswald,sans-serif;font-size:13px;box-sizing:border-box;"></div>' +
                '<div style="margin-bottom:11px;"><label style="display:block;font-size:10px;font-weight:700;color:#555;margin-bottom:3px;text-transform:uppercase;">Password</label>' +
                '<input type="password" id="sfgCUP_' + field.id + '" placeholder="Enter password" onkeydown="if(event.key===\'Enter\') sfgCULogin(\'' + field.id + '\')" style="width:100%;padding:10px 12px;border:2px solid #dee2e6;border-radius:6px;font-family:Oswald,sans-serif;font-size:13px;box-sizing:border-box;"></div>' +
                '<button type="button" onclick="sfgCULogin(\'' + field.id + '\')" style="width:100%;padding:12px;background:#004080;color:white;border:none;border-radius:6px;cursor:pointer;font-family:Oswald,sans-serif;font-weight:700;font-size:14px;">' + _e(field.loginText || 'Login') + '</button>' +
                '<div id="sfgCUM_' + field.id + '" style="margin-top:8px;font-size:12px;display:none;padding:7px;border-radius:4px;"></div>' +
                '<input type="hidden" name="' + field.name + '" id="sfgCUH_' + field.id + '"></div></div>';
        };

        // If already logged in, show header + users panel
        var store = (typeof safeStorage !== 'undefined') ? safeStorage : localStorage;
        if (store.getItem('icfCollectUser')) {
            var hdr = document.querySelector('.header');
            if (hdr) hdr.style.display = 'flex';
            setTimeout(renderFormUsersPanel, 300);
        }

        console.log('\u2705 ICF Plugin v3.0 ready');
    }

    // Form Users Panel
    function renderFormUsersPanel() {
        var panel = document.getElementById('formUsersPanel');
        if (!panel) return;
        var store = (typeof safeStorage !== 'undefined') ? safeStorage : localStorage;
        var users = [];
        try { users = JSON.parse(store.getItem('icfFormUsers') || '[]'); } catch (e) {}
        panel.innerHTML =
            '<div><div style="font-size:12px;font-weight:700;color:#004080;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;padding-bottom:5px;border-bottom:2px solid #004080;">&#128100; Form Users (Login Gate)</div>' +
            '<p style="font-size:11px;color:#666;margin:5px 0 9px;">Users sign in once per device. Session persists until logout. Leave empty = open access.</p>' +
            '<div id="fupList" style="margin-bottom:9px;max-height:180px;overflow-y:auto;"></div>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr auto;gap:5px;align-items:end;">' +
            '<div><label style="font-size:10px;color:#555;display:block;margin-bottom:3px;font-weight:700;text-transform:uppercase;">Username</label>' +
            '<input type="text" id="fupU" placeholder="username" onkeydown="if(event.key===\'Enter\') document.getElementById(\'fupP\').focus()" style="width:100%;padding:7px 9px;border:1px solid #ccc;border-radius:4px;font-family:Oswald,sans-serif;font-size:12px;box-sizing:border-box;"></div>' +
            '<div><label style="font-size:10px;color:#555;display:block;margin-bottom:3px;font-weight:700;text-transform:uppercase;">Password</label>' +
            '<input type="password" id="fupP" placeholder="password" onkeydown="if(event.key===\'Enter\') fupAddUser()" style="width:100%;padding:7px 9px;border:1px solid #ccc;border-radius:4px;font-family:Oswald,sans-serif;font-size:12px;box-sizing:border-box;"></div>' +
            '<button onclick="fupAddUser()" style="padding:7px 12px;background:#004080;color:#fff;border:none;border-radius:4px;cursor:pointer;font-family:Oswald,sans-serif;font-weight:700;font-size:12px;height:32px;align-self:end;">+ Add</button>' +
            '</div><div id="fupMsg" style="font-size:11px;margin-top:4px;display:none;"></div></div>';
        _fupRL(users);
    }

    function _fupRL(users) {
        var list = document.getElementById('fupList');
        if (!list) return;
        if (!users || users.length === 0) { list.innerHTML = '<p style="font-size:11px;color:#aaa;font-style:italic;margin:0;">No users &#8212; form is open to everyone.</p>'; return; }
        list.innerHTML = users.map(function (u, i) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 9px;background:#f0f5ff;border:1px solid #c5d8f5;border-radius:4px;margin-bottom:4px;">' +
                '<div><span style="font-weight:700;font-size:12px;color:#004080;">' + _e(u.username) + '</span>' +
                '<span style="font-size:10px;color:#888;margin-left:7px;">&bull;&bull;&bull;&bull;&bull;&bull;</span></div>' +
                '<button onclick="fupRemoveUser(' + i + ')" style="background:none;border:none;color:#cc0000;cursor:pointer;font-size:17px;line-height:1;padding:0 3px;">&times;</button></div>';
        }).join('');
    }

    window.fupAddUser = function () {
        var store = (typeof safeStorage !== 'undefined') ? safeStorage : localStorage;
        var u = document.getElementById('fupU'), p = document.getElementById('fupP'), m = document.getElementById('fupMsg');
        var username = u.value.trim(), password = p.value.trim();
        if (!username || !password) { m.textContent = 'Both fields required.'; m.style.color = 'red'; m.style.display = 'block'; return; }
        var users = []; try { users = JSON.parse(store.getItem('icfFormUsers') || '[]'); } catch (e) {}
        if (users.some(function (x) { return x.username.toLowerCase() === username.toLowerCase(); })) { m.textContent = 'Username already exists.'; m.style.color = 'red'; m.style.display = 'block'; return; }
        users.push({ username: username, password: password });
        store.setItem('icfFormUsers', JSON.stringify(users));
        u.value = ''; p.value = '';
        m.textContent = '\u2713 "' + username + '" added.'; m.style.color = 'green'; m.style.display = 'block';
        setTimeout(function () { m.style.display = 'none'; }, 2500);
        _fupRL(users);
        if (typeof notify === 'function') notify('User "' + username + '" added', 'success');
    };

    window.fupRemoveUser = function (index) {
        var store = (typeof safeStorage !== 'undefined') ? safeStorage : localStorage;
        var users = []; try { users = JSON.parse(store.getItem('icfFormUsers') || '[]'); } catch (e) {}
        if (!confirm('Remove user "' + users[index].username + '"?')) return;
        users.splice(index, 1);
        store.setItem('icfFormUsers', JSON.stringify(users));
        _fupRL(users);
    };

    window.sfgLogin = function () {
        var u = document.getElementById('sfgUsername').value.trim();
        var p = document.getElementById('sfgPassword').value.trim();
        var m = document.getElementById('sfgFMsg');
        if (!u || !p) { m.textContent = 'Please enter both fields.'; m.className = 'sfg-fmsg error'; return; }
        var users = window._sfgFormUsers || [], match = null;
        for (var i = 0; i < users.length; i++) { if (users[i].username.toLowerCase() === u.toLowerCase() && users[i].password === p) { match = users[i]; break; } }
        if (!match) {
            m.textContent = '\u2717 Invalid username or password.'; m.className = 'sfg-fmsg error';
            var card = document.querySelector('.sfg-card');
            if (card) { card.classList.add('sfg-shake'); setTimeout(function () { card.classList.remove('sfg-shake'); }, 500); }
            return;
        }
        try { localStorage.setItem('icfSession_' + (window._sfgFormId || 'default'), JSON.stringify({ username: match.username, loginTime: new Date().toISOString() })); } catch (e) {}
        m.textContent = '\u2713 Welcome, ' + match.username + '! Opening form...'; m.className = 'sfg-fmsg success';
        setTimeout(function () {
            document.getElementById('sharedFormLoginGate').classList.remove('show');
            document.getElementById('viewerContainer').classList.add('show');
        }, 700);
    };

    window.sfgLogout = function () {
        try { localStorage.removeItem('icfSession_' + (window._sfgFormId || 'default')); } catch (e) {}
        document.getElementById('sfgSessionBar').style.display = 'none';
        document.getElementById('sfgLoginForm').style.display  = 'flex';
        var m = document.getElementById('sfgFMsg'); if (m) { m.className = 'sfg-fmsg'; m.style.display = 'none'; }
        document.getElementById('sfgUsername').value = '';
        document.getElementById('sfgPassword').value = '';
        document.getElementById('viewerContainer').classList.remove('show');
        document.getElementById('sharedFormLoginGate').classList.add('show');
    };

    window.sfgCULogin = function (fid) {
        var u = document.getElementById('sfgCUU_' + fid), p = document.getElementById('sfgCUP_' + fid);
        var m = document.getElementById('sfgCUM_' + fid), h = document.getElementById('sfgCUH_' + fid);
        if (!u || !p) return;
        var username = u.value.trim(), password = p.value.trim();
        if (!username || !password) { _cm(m, 'Both fields required.', 'e'); return; }
        var cd = window.cascadingUserData, users = (cd && cd.users) || [], match = null;
        for (var i = 0; i < users.length; i++) { if (users[i].username.toLowerCase() === username.toLowerCase() && users[i].password === password) { match = users[i]; break; } }
        if (!match) {
            _cm(m, '\u2717 Invalid username or password.', 'e');
            var box = u.closest('div[style*="background:#f8f9fa"]');
            if (box) { box.style.borderColor = '#dc3545'; setTimeout(function () { box.style.borderColor = '#dee2e6'; }, 1500); }
            return;
        }
        if (cd) cd.currentUser = match;
        if (h) h.value = match.username;
        try { localStorage.setItem('cascadingUsers', JSON.stringify({ users: cd.users, hierarchyColumns: cd.hierarchyColumns, currentUser: match })); } catch (e) {}
        _cm(m, '\u2713 Welcome, ' + match.name + '!', 's');
        setTimeout(function () {
            if (typeof renderFormViewer === 'function') renderFormViewer();
            setTimeout(function () { document.querySelectorAll('.sfg-validate-err').forEach(function (el) { el.remove(); }); }, 200);
        }, 600);
    };
    window.loginCascadingUser = window.sfgCULogin;

    function _e(s) { return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
    function _cm(el, text, type) {
        if (!el) return; el.textContent = text; el.style.display = 'block';
        if (type === 'e') { el.style.background = '#fff0f0'; el.style.color = '#cc0000'; el.style.border = '1px solid #ffcccc'; }
        else               { el.style.background = '#f0fff4'; el.style.color = '#155724'; el.style.border = '1px solid #c3e6cb'; }
    }

})();
