// ==================== STATE MANAGEMENT ====================
let currentUser = null;
let formFields = [];
let selectedFieldId = null;
let fieldCounter = 0;

// ==================== STORAGE HELPERS ====================
const Storage = {
    get: (key) => {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch (e) {}
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {}
    }
};

// ==================== MESSAGE HANDLING ====================
function showMessage(text, type = 'error') {
    const msgDiv = document.getElementById('message');
    msgDiv.textContent = text;
    msgDiv.className = `message ${type}`;
}

function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}

// ==================== AUTH FUNCTIONS ====================
function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show correct form
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    document.getElementById(tab + 'Form').classList.add('active');
    
    // Hide message
    document.getElementById('message').style.display = 'none';
}

async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    showLoading(true);
    
    // Simulate login (replace with actual API call)
    setTimeout(() => {
        // For demo, accept any credentials
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
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    showLoading(true);
    
    // Simulate signup
    setTimeout(() => {
        showMessage('Account created! Please login.', 'success');
        showLoading(false);
        switchTab('login');
    }, 1000);
}

async function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = document.getElementById('forgotEmail').value;
    
    showLoading(true);
    
    // Simulate password reset
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
        options: type === 'select' || type === 'radio' ? ['Option 1', 'Option 2'] : []
    };
    
    formFields.push(field);
    renderFields();
    selectField(field.id);
    saveForm();
}

function getDefaultLabel(type) {
    const labels = {
        'text': 'Text Input',
        'number': 'Number Input',
        'email': 'Email Address',
        'phone': 'Phone Number',
        'date': 'Date',
        'textarea': 'Long Text',
        'select': 'Dropdown',
        'radio': 'Radio Buttons',
        'checkbox': 'Checkboxes',
        'yesno': 'Yes/No Question',
        'gps': 'GPS Location',
        'signature': 'Signature',
        'period': 'Reporting Period'
    };
    return labels[type] || type + ' Field';
}

function renderFields() {
    const container = document.getElementById('formFields');
    const emptyCanvas = document.getElementById('emptyCanvas');
    
    if (formFields.length === 0) {
        emptyCanvas.style.display = 'block';
        container.innerHTML = '';
        return;
    }
    
    emptyCanvas.style.display = 'none';
    
    container.innerHTML = formFields.map(field => `
        <div class="field-wrapper ${selectedFieldId === field.id ? 'selected' : ''}" 
             onclick="selectField('${field.id}')">
            <div class="field-header">
                <span class="field-label">${field.label}</span>
                <div class="field-actions">
                    <button class="field-edit" onclick="editField('${field.id}')">✏️</button>
                    <button class="field-delete" onclick="deleteField('${field.id}')">🗑️</button>
                </div>
            </div>
            <div class="field-preview">
                ${getFieldPreview(field)}
            </div>
        </div>
    `).join('');
}

function getFieldPreview(field) {
    switch(field.type) {
        case 'text':
        case 'email':
        case 'phone':
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
            return `<div style="border:1px solid #ccc; height:100px; background:#f9f9f9"></div>`;
        default:
            return `<input type="text" placeholder="${field.label}" disabled>`;
    }
}

function selectField(id) {
    selectedFieldId = id;
    renderFields();
    renderProperties();
}

function editField(id) {
    selectField(id);
}

function deleteField(id) {
    if (confirm('Delete this field?')) {
        formFields = formFields.filter(f => f.id !== id);
        if (selectedFieldId === id) {
            selectedFieldId = null;
            renderProperties();
        }
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
    
    if (field.type !== 'yesno' && field.type !== 'gps' && field.type !== 'signature') {
        html += `
            <div class="prop-group">
                <label>Placeholder</label>
                <input type="text" id="propPlaceholder" value="${field.placeholder || ''}" onchange="updateField('placeholder', this.value)">
            </div>
        `;
    }
    
    if (field.type === 'select' || field.type === 'radio' || field.type === 'checkbox') {
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
    if (field) {
        field[prop] = value;
        renderFields();
        saveForm();
    }
}

// ==================== FORM OPERATIONS ====================
function saveForm() {
    Storage.set('icf_form', JSON.stringify({
        title: document.getElementById('formTitle').value,
        fields: formFields
    }));
}

function loadForm() {
    const saved = Storage.get('icf_form');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            document.getElementById('formTitle').value = data.title || 'Untitled Form';
            formFields = data.fields || [];
            fieldCounter = formFields.length;
            renderFields();
        } catch (e) {}
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

function shareForm() {
    // Create a simple shareable link (in real app, this would save to server)
    const formData = btoa(JSON.stringify({
        title: document.getElementById('formTitle').value,
        fields: formFields
    }));
    
    const shareUrl = window.location.origin + window.location.pathname + '?form=' + formData.substring(0, 50);
    document.getElementById('shareUrl').textContent = shareUrl;
    document.getElementById('shareModal').classList.add('show');
}

function copyShareUrl() {
    const url = document.getElementById('shareUrl').textContent;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
}

// ==================== INITIALIZATION ====================
function init() {
    // Check for saved user
    const savedUser = Storage.get('user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        document.getElementById('userDisplay').textContent = currentUser.name;
        loadForm();
    }
}

// Start the app
init();
