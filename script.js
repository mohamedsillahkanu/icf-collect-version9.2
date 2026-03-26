// ==================== STATE MANAGEMENT ====================
let currentUser = null;
let formFields = [];
let selectedFieldId = null;
let fieldCounter = 0;
let formCredentials = []; // [{username, password}]
let sharedFormData = null; // populated when viewing a shared form

// ==================== STORAGE HELPERS ====================
const Storage = {
    get: (key) => { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set: (key, value) => { try { localStorage.setItem(key, value); } catch (e) {} },
    remove: (key) => { try { localStorage.removeItem(key); } catch (e) {} }
};

// ==================== MESSAGE HANDLING ====================
function showMessage(text, type = 'error') {
    const msgDiv = document.getElementById('message');
    if (!msgDiv) return;
    msgDiv.textContent = text;
    msgDiv.className = `message ${type}`;
    msgDiv.style.display = 'block';
}

function showLoading(show) {
    const el = document.getElementById('loading');
    if (el) el.style.display = show ? 'block' : 'none';
}

// ==================== AUTH FUNCTIONS (Builder Login) ====================
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    document.getElementById(tab + 'Form').classList.add('active');
    const msgDiv = document.getElementById('message');
    if (msgDiv) msgDiv.style.display = 'none';
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    showLoading(true);
    setTimeout(() => {
        currentUser = { email, name: email.split('@')[0] };
        Storage.set('user', JSON.stringify(currentUser));
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        document.getElementById('userDisplay').textContent = currentUser.name;
        showLoading(false);
        loadForm();
    }, 1000);
}

async function handleSignup(e) {
    e.preventDefault();
    showLoading(true);
    setTimeout(() => {
        showMessage('Account created! Please login.', 'success');
        showLoading(false);
        switchTab('login');
    }, 1000);
}

async function handleForgotPassword(e) {
    e.preventDefault();
    showLoading(true);
    setTimeout(() => {
        showMessage('Reset link sent to your email!', 'success');
        showLoading(false);
    }, 1000);
}

function logout() {
    currentUser = null;
    Storage.remove('user');
    document.getElementById('app').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    switchTab('login');
}

// ==================== FORM BUILDER FUNCTIONS ====================
function addField(type) {
    fieldCounter++;
    const field = {
        id: 'field_' + fieldCounter,
        type: type,
        label: getDefaultLabel(type),
        name: type + '_' + fieldCounter,
        required: false,
        placeholder: '',
        options: (type === 'select' || type === 'radio' || type === 'checkbox') ? ['Option 1', 'Option 2'] : []
    };
    formFields.push(field);
    renderFields();
    selectField(field.id);
    saveForm();
}

function getDefaultLabel(type) {
    const labels = {
        'text': 'Text Input', 'number': 'Number Input', 'email': 'Email Address',
        'phone': 'Phone Number', 'date': 'Date', 'textarea': 'Long Text',
        'select': 'Dropdown', 'radio': 'Radio Buttons', 'checkbox': 'Checkboxes',
        'yesno': 'Yes/No Question', 'gps': 'GPS Location', 'signature': 'Signature',
        'period': 'Reporting Period'
    };
    return labels[type] || type + ' Field';
}

function renderFields() {
    const container = document.getElementById('formFields');
    const emptyCanvas = document.getElementById('emptyCanvas');
    if (formFields.length === 0) {
        if (emptyCanvas) emptyCanvas.style.display = 'block';
        container.innerHTML = '';
        return;
    }
    if (emptyCanvas) emptyCanvas.style.display = 'none';
    container.innerHTML = formFields.map(field => `
        <div class="field-wrapper ${selectedFieldId === field.id ? 'selected' : ''}" 
             onclick="selectField('${field.id}')">
            <div class="field-header">
                <span class="field-label">${field.label}</span>
                <div class="field-actions">
                    <button class="field-edit" onclick="editField('${field.id}'); event.stopPropagation();">✏️</button>
                    <button class="field-delete" onclick="deleteField('${field.id}'); event.stopPropagation();">🗑️</button>
                </div>
            </div>
            <div class="field-preview">${getFieldPreview(field)}</div>
        </div>
    `).join('');
}

function getFieldPreview(field) {
    switch(field.type) {
        case 'text': case 'email': case 'phone':
            return `<input type="${field.type}" placeholder="${field.placeholder || field.label}" disabled>`;
        case 'number':
            return `<input type="number" placeholder="${field.placeholder || field.label}" disabled>`;
        case 'date':
            return `<input type="date" disabled>`;
        case 'textarea':
            return `<textarea rows="3" placeholder="${field.placeholder || field.label}" disabled></textarea>`;
        case 'select':
            return `<select disabled><option>${field.options.join('</option><option>')}</option></select>`;
        case 'radio':
            return field.options.map(opt => `<label><input type="radio" disabled> ${opt}</label>`).join('<br>');
        case 'checkbox':
            return field.options.map(opt => `<label><input type="checkbox" disabled> ${opt}</label>`).join('<br>');
        case 'yesno':
            return `<label><input type="radio" disabled> Yes</label><br><label><input type="radio" disabled> No</label>`;
        case 'gps':
            return `<button disabled>📍 Get Location</button>`;
        case 'signature':
            return `<div style="border:1px solid #ccc; height:100px; background:#f9f9f9; display:flex; align-items:center; justify-content:center; color:#aaa;">Sign here</div>`;
        default:
            return `<input type="text" placeholder="${field.label}" disabled>`;
    }
}

function selectField(id) {
    selectedFieldId = id;
    renderFields();
    renderProperties();
}

function editField(id) { selectField(id); }

function deleteField(id) {
    if (confirm('Delete this field?')) {
        formFields = formFields.filter(f => f.id !== id);
        if (selectedFieldId === id) { selectedFieldId = null; renderProperties(); }
        renderFields();
        saveForm();
    }
}

function renderProperties() {
    const container = document.getElementById('propertiesContent');
    if (!selectedFieldId) {
        container.innerHTML = '<p class="no-selection">Select a field to edit its properties</p>';
        return;
    }
    const field = formFields.find(f => f.id === selectedFieldId);
    if (!field) return;

    let html = `
        <div class="prop-group">
            <label>Label</label>
            <input type="text" id="propLabel" value="${field.label}" onchange="updateField('label', this.value)">
        </div>
        <div class="prop-group">
            <label>Required</label>
            <input type="checkbox" id="propRequired" ${field.required ? 'checked' : ''} onchange="updateField('required', this.checked)">
        </div>
    `;
    if (!['yesno', 'gps', 'signature'].includes(field.type)) {
        html += `
            <div class="prop-group">
                <label>Placeholder</label>
                <input type="text" id="propPlaceholder" value="${field.placeholder || ''}" onchange="updateField('placeholder', this.value)">
            </div>
        `;
    }
    if (['select', 'radio', 'checkbox'].includes(field.type)) {
        html += `
            <div class="prop-group">
                <label>Options (one per line)</label>
                <textarea id="propOptions" rows="4" onchange="updateField('options', this.value.split('\\n').filter(o => o.trim()))">${field.options.join('\n')}</textarea>
            </div>
        `;
    }
    container.innerHTML = html;
}

function updateField(prop, value) {
    const field = formFields.find(f => f.id === selectedFieldId);
    if (field) { field[prop] = value; renderFields(); saveForm(); }
}

// ==================== CREDENTIALS PANEL ====================
/**
 * Call this to render the credentials manager panel.
 * Add a <div id="credentialsPanel"></div> somewhere in your builder UI,
 * then call renderCredentialsPanel() after init.
 */
function renderCredentialsPanel() {
    const panel = document.getElementById('credentialsPanel');
    if (!panel) return;

    panel.innerHTML = `
        <div class="credentials-panel">
            <h4 style="margin:0 0 10px; font-size:13px; color:#004080; text-transform:uppercase; letter-spacing:.5px;">
                🔒 Form Access Credentials
            </h4>
            <p style="font-size:12px; color:#666; margin:0 0 12px;">
                Users must log in with these credentials before accessing your shared form.
            </p>

            <div id="credList" style="margin-bottom:12px;"></div>

            <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:6px; align-items:end;">
                <div>
                    <label style="font-size:11px; color:#555; display:block; margin-bottom:3px;">Username</label>
                    <input type="text" id="newCredUser" placeholder="e.g. john_doe"
                           style="width:100%; padding:6px 8px; border:1px solid #ccc; border-radius:4px; font-size:13px;">
                </div>
                <div>
                    <label style="font-size:11px; color:#555; display:block; margin-bottom:3px;">Password</label>
                    <input type="password" id="newCredPass" placeholder="••••••••"
                           style="width:100%; padding:6px 8px; border:1px solid #ccc; border-radius:4px; font-size:13px;">
                </div>
                <button onclick="addCredential()"
                        style="padding:6px 12px; background:#004080; color:#fff; border:none; border-radius:4px; cursor:pointer; font-size:13px; height:30px; align-self:end;">
                    + Add
                </button>
            </div>

            <div id="credMsg" style="font-size:12px; margin-top:6px; color:green; display:none;"></div>
        </div>
    `;

    renderCredList();
}

function renderCredList() {
    const list = document.getElementById('credList');
    if (!list) return;

    if (formCredentials.length === 0) {
        list.innerHTML = '<p style="font-size:12px; color:#aaa; font-style:italic;">No credentials added. Form will be open access.</p>';
        return;
    }

    list.innerHTML = formCredentials.map((cred, i) => `
        <div style="display:flex; align-items:center; justify-content:space-between;
                    padding:6px 10px; background:#f0f5ff; border:1px solid #c5d8f5;
                    border-radius:4px; margin-bottom:6px;">
            <div>
                <span style="font-weight:600; font-size:13px; color:#004080;">${escapeHtml(cred.username)}</span>
                <span style="font-size:11px; color:#888; margin-left:8px;">••••••••</span>
            </div>
            <button onclick="removeCredential(${i})"
                    style="background:none; border:none; color:#cc0000; cursor:pointer; font-size:16px; line-height:1;"
                    title="Remove">×</button>
        </div>
    `).join('');
}

function addCredential() {
    const userInput = document.getElementById('newCredUser');
    const passInput = document.getElementById('newCredPass');
    const msg = document.getElementById('credMsg');

    const username = userInput.value.trim();
    const password = passInput.value.trim();

    if (!username || !password) {
        msg.textContent = 'Both username and password are required.';
        msg.style.color = 'red';
        msg.style.display = 'block';
        return;
    }

    if (formCredentials.some(c => c.username.toLowerCase() === username.toLowerCase())) {
        msg.textContent = 'Username already exists.';
        msg.style.color = 'red';
        msg.style.display = 'block';
        return;
    }

    formCredentials.push({ username, password });
    userInput.value = '';
    passInput.value = '';

    msg.textContent = `✓ "${username}" added successfully.`;
    msg.style.color = 'green';
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 2500);

    renderCredList();
    saveForm();
}

function removeCredential(index) {
    if (confirm(`Remove credential "${formCredentials[index].username}"?`)) {
        formCredentials.splice(index, 1);
        renderCredList();
        saveForm();
    }
}

// ==================== FORM OPERATIONS ====================
function saveForm() {
    Storage.set('icf_form', JSON.stringify({
        title: document.getElementById('formTitle')?.value || 'Untitled Form',
        fields: formFields,
        credentials: formCredentials
    }));
}

function loadForm() {
    const saved = Storage.get('icf_form');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (document.getElementById('formTitle'))
                document.getElementById('formTitle').value = data.title || 'Untitled Form';
            formFields = data.fields || [];
            formCredentials = data.credentials || [];
            fieldCounter = formFields.length;
            renderFields();
            renderCredentialsPanel();
        } catch (e) {}
    } else {
        renderCredentialsPanel();
    }
}

function previewForm() {
    const previewBody = document.getElementById('previewBody');
    const title = document.getElementById('formTitle').value;
    previewBody.innerHTML = `
        <h3 style="margin-bottom:20px;">${title}</h3>
        ${formFields.map(field => `
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:500;">
                    ${field.label} ${field.required ? '<span style="color:red;">*</span>' : ''}
                </label>
                ${getFieldPreview(field)}
            </div>
        `).join('')}
        <button class="btn-primary" style="margin-top:20px;">Submit</button>
    `;
    document.getElementById('previewModal').classList.add('show');
}

function closePreview() {
    document.getElementById('previewModal').classList.remove('show');
}

/**
 * Share form — credentials are now baked into the encoded URL payload.
 * Anyone who opens the link sees a login screen before the form.
 */
function shareForm() {
    const payload = {
        title: document.getElementById('formTitle').value,
        fields: formFields,
        credentials: formCredentials  // ← embedded here
    };

    const formData = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const shareUrl = window.location.origin + window.location.pathname + '?form=' + formData;

    document.getElementById('shareUrl').textContent = shareUrl;
    document.getElementById('shareModal').classList.add('show');

    // Show a note if no credentials set
    const note = document.getElementById('shareNote');
    if (note) {
        if (formCredentials.length === 0) {
            note.textContent = '⚠️ No credentials set — this form is open to everyone.';
            note.style.color = '#cc6600';
        } else {
            note.textContent = `🔒 ${formCredentials.length} credential(s) embedded. Users must log in to access.`;
            note.style.color = '#007700';
        }
        note.style.display = 'block';
    }
}

function copyShareUrl() {
    const url = document.getElementById('shareUrl').textContent;
    navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!'));
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
}

// ==================== SHARED FORM VIEWER ====================
/**
 * Checks if URL has ?form= param. If yes, switches to viewer mode:
 * 1. Decodes the payload (fields + credentials)
 * 2. Shows a login screen (if credentials exist)
 * 3. After successful login → renders the form for submission
 */
function checkUrlForm() {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('form');
    if (!encoded) return false;

    try {
        const decoded = decodeURIComponent(escape(atob(encoded)));
        sharedFormData = JSON.parse(decoded);
    } catch (e) {
        showSharedFormError('Invalid or corrupted form link.');
        return true;
    }

    // Hide builder UI entirely
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('app').style.display = 'none';

    // Show shared form container (must exist in HTML — see note below)
    const viewer = document.getElementById('sharedFormViewer');
    if (!viewer) {
        alert('sharedFormViewer element missing from HTML.');
        return true;
    }
    viewer.style.display = 'flex';

    if (!sharedFormData.credentials || sharedFormData.credentials.length === 0) {
        // No credentials required — show form directly
        renderSharedFormQuestions();
    } else {
        // Show login gate
        renderSharedFormLogin();
    }

    return true;
}

function renderSharedFormLogin() {
    const viewer = document.getElementById('sharedFormViewer');
    viewer.innerHTML = `
        <div class="shared-login-card">
            <div class="shared-login-logo">
                <div class="logo-icon">🔒</div>
                <h2>${escapeHtml(sharedFormData.title || 'Form')}</h2>
                <p>This form is protected. Please log in to continue.</p>
            </div>

            <div id="sharedLoginMsg" class="shared-login-msg" style="display:none;"></div>

            <div class="shared-login-fields">
                <div class="shared-field-group">
                    <label>Username</label>
                    <input type="text" id="sharedUsername" placeholder="Enter your username"
                           onkeydown="if(event.key==='Enter') validateSharedLogin()">
                </div>
                <div class="shared-field-group">
                    <label>Password</label>
                    <input type="password" id="sharedPassword" placeholder="Enter your password"
                           onkeydown="if(event.key==='Enter') validateSharedLogin()">
                </div>
                <button class="shared-login-btn" onclick="validateSharedLogin()">
                    Access Form →
                </button>
            </div>
        </div>
    `;
}

function validateSharedLogin() {
    const username = document.getElementById('sharedUsername').value.trim();
    const password = document.getElementById('sharedPassword').value.trim();
    const msgEl = document.getElementById('sharedLoginMsg');

    if (!username || !password) {
        msgEl.textContent = 'Please enter both username and password.';
        msgEl.className = 'shared-login-msg error';
        msgEl.style.display = 'block';
        return;
    }

    const match = sharedFormData.credentials.find(
        c => c.username.toLowerCase() === username.toLowerCase() && c.password === password
    );

    if (!match) {
        msgEl.textContent = '✗ Invalid username or password. Please try again.';
        msgEl.className = 'shared-login-msg error';
        msgEl.style.display = 'block';
        // Shake animation on card
        const card = document.querySelector('.shared-login-card');
        if (card) { card.classList.add('shake'); setTimeout(() => card.classList.remove('shake'), 500); }
        return;
    }

    // Success — render form
    msgEl.textContent = `✓ Welcome, ${match.username}!`;
    msgEl.className = 'shared-login-msg success';
    msgEl.style.display = 'block';

    setTimeout(() => renderSharedFormQuestions(match.username), 600);
}

function renderSharedFormQuestions(loggedInUser = '') {
    const viewer = document.getElementById('sharedFormViewer');
    const responses = {};

    viewer.innerHTML = `
        <div class="shared-form-card">
            <div class="shared-form-header">
                <h2>${escapeHtml(sharedFormData.title || 'Form')}</h2>
                ${loggedInUser ? `<span class="shared-form-user">👤 ${escapeHtml(loggedInUser)}</span>` : ''}
            </div>

            <div id="sharedFormBody" class="shared-form-body">
                ${sharedFormData.fields.map(field => `
                    <div class="shared-form-field" id="wrap_${field.id}">
                        <label class="shared-form-label">
                            ${escapeHtml(field.label)}
                            ${field.required ? '<span class="req-star">*</span>' : ''}
                        </label>
                        ${renderSharedFieldInput(field)}
                    </div>
                `).join('')}
            </div>

            <div id="sharedSubmitMsg" style="display:none; padding:12px; border-radius:6px; margin-top:16px; font-size:14px;"></div>

            <button class="shared-submit-btn" onclick="submitSharedForm()">
                Submit Form
            </button>
        </div>
    `;
}

function renderSharedFieldInput(field) {
    const id = `input_${field.id}`;
    switch(field.type) {
        case 'text': case 'email': case 'phone':
            return `<input type="${field.type}" id="${id}" class="shared-input" placeholder="${escapeHtml(field.placeholder || field.label)}">`;
        case 'number':
            return `<input type="number" id="${id}" class="shared-input" placeholder="${escapeHtml(field.placeholder || field.label)}">`;
        case 'date':
            return `<input type="date" id="${id}" class="shared-input">`;
        case 'textarea':
            return `<textarea id="${id}" class="shared-input" rows="4" placeholder="${escapeHtml(field.placeholder || field.label)}"></textarea>`;
        case 'select':
            return `<select id="${id}" class="shared-input">
                        <option value="">-- Select --</option>
                        ${field.options.map(o => `<option>${escapeHtml(o)}</option>`).join('')}
                    </select>`;
        case 'radio': case 'yesno':
            const radioOpts = field.type === 'yesno' ? ['Yes', 'No'] : field.options;
            return radioOpts.map((opt, i) => `
                <label class="shared-option-label">
                    <input type="radio" name="${id}" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}
                </label>`).join('');
        case 'checkbox':
            return field.options.map((opt, i) => `
                <label class="shared-option-label">
                    <input type="checkbox" name="${id}" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}
                </label>`).join('');
        case 'gps':
            return `<div style="display:flex; gap:8px; align-items:center;">
                        <input type="text" id="${id}" class="shared-input" placeholder="Latitude, Longitude" readonly>
                        <button class="gps-btn" onclick="captureGPS('${id}')">📍 Get</button>
                    </div>`;
        case 'signature':
            return `<canvas id="${id}" class="sig-canvas" width="400" height="120"
                        style="border:1px solid #ccc; border-radius:4px; cursor:crosshair; touch-action:none;"></canvas>
                    <button onclick="clearSignature('${id}')" style="font-size:11px; color:#888; background:none; border:none; cursor:pointer; margin-top:2px;">Clear</button>`;
        default:
            return `<input type="text" id="${id}" class="shared-input" placeholder="${escapeHtml(field.label)}">`;
    }
}

function captureGPS(inputId) {
    if (!navigator.geolocation) { alert('Geolocation not supported.'); return; }
    navigator.geolocation.getCurrentPosition(
        pos => {
            document.getElementById(inputId).value = `${pos.coords.latitude.toFixed(6)}, ${pos.coords.longitude.toFixed(6)}`;
        },
        err => alert('Could not get location: ' + err.message)
    );
}

// Minimal signature pad
const sigPads = {};
function initSignaturePad(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || sigPads[canvasId]) return;
    const ctx = canvas.getContext('2d');
    let drawing = false;
    const getPos = (e) => {
        const r = canvas.getBoundingClientRect();
        const src = e.touches ? e.touches[0] : e;
        return { x: src.clientX - r.left, y: src.clientY - r.top };
    };
    canvas.addEventListener('mousedown', e => { drawing = true; const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); });
    canvas.addEventListener('mousemove', e => { if (!drawing) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); });
    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('touchstart', e => { e.preventDefault(); drawing = true; const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); });
    canvas.addEventListener('touchmove', e => { e.preventDefault(); if (!drawing) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); });
    canvas.addEventListener('touchend', () => drawing = false);
    sigPads[canvasId] = true;
}

function clearSignature(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

function submitSharedForm() {
    const msgEl = document.getElementById('sharedSubmitMsg');
    const missing = [];

    sharedFormData.fields.forEach(field => {
        if (!field.required) return;
        const id = `input_${field.id}`;
        if (field.type === 'radio' || field.type === 'yesno') {
            if (!document.querySelector(`input[name="${id}"]:checked`)) missing.push(field.label);
        } else if (field.type === 'checkbox') {
            if (!document.querySelector(`input[name="${id}"]:checked`)) missing.push(field.label);
        } else {
            const el = document.getElementById(id);
            if (el && !el.value.trim()) missing.push(field.label);
        }
    });

    if (missing.length > 0) {
        msgEl.innerHTML = `<strong>Please fill in required fields:</strong><br>• ${missing.join('<br>• ')}`;
        msgEl.style.background = '#fff0f0';
        msgEl.style.border = '1px solid #ffcccc';
        msgEl.style.color = '#cc0000';
        msgEl.style.display = 'block';
        return;
    }

    // Collect responses
    const data = {};
    sharedFormData.fields.forEach(field => {
        const id = `input_${field.id}`;
        if (field.type === 'radio' || field.type === 'yesno') {
            const checked = document.querySelector(`input[name="${id}"]:checked`);
            data[field.label] = checked ? checked.value : '';
        } else if (field.type === 'checkbox') {
            data[field.label] = [...document.querySelectorAll(`input[name="${id}"]:checked`)].map(el => el.value);
        } else if (field.type === 'signature') {
            const canvas = document.getElementById(id);
            data[field.label] = canvas ? canvas.toDataURL() : '';
        } else {
            const el = document.getElementById(id);
            data[field.label] = el ? el.value : '';
        }
    });

    console.log('Form submission:', data); // Replace with actual API call

    msgEl.innerHTML = `✅ <strong>Form submitted successfully!</strong> Thank you for your response.`;
    msgEl.style.background = '#f0fff4';
    msgEl.style.border = '1px solid #c3e6cb';
    msgEl.style.color = '#155724';
    msgEl.style.display = 'block';

    document.querySelector('.shared-submit-btn').disabled = true;
    document.querySelector('.shared-submit-btn').textContent = 'Submitted ✓';
}

function showSharedFormError(msg) {
    const viewer = document.getElementById('sharedFormViewer');
    if (viewer) {
        viewer.style.display = 'flex';
        viewer.innerHTML = `<div class="shared-login-card"><p style="color:red;">${msg}</p></div>`;
    }
}

// ==================== UTILITIES ====================
function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ==================== INITIALIZATION ====================
function init() {
    // If URL has ?form= param, switch to viewer mode
    if (checkUrlForm()) return;

    // Otherwise normal builder mode
    const savedUser = Storage.get('user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('app').style.display = 'block';
            document.getElementById('userDisplay').textContent = currentUser.name;
            loadForm();
        } catch(e) {
            Storage.remove('user');
        }
    }
}

init();
