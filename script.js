// Document records will be added here later.
// Example structure:
// "ALW-EMP-2026-001": {
//   type: "Employment Certificate",
//   name: "Dr. Karrar Alhilfi",
//   position: "General Dentist",
//   issueDate: "19 September 2026",
//   status: "Valid",
//   pdf: "documents/ALW-EMP-2026-001.pdf"
// }

const documents = {
  "DNT-EMP-2026-001": {
    type: "Employment Certificate",
    name: "Demo Employee",
    position: "General Dentist",
    issueDate: "19 September 2026",
    status: "Valid"
  }
};

function verifyDocument(){
  const id = document.getElementById("docNo").value.trim().toUpperCase();
  const result = document.getElementById("result");
  if(!id){
    result.innerHTML = '<div class="invalid"><strong>Please enter a document number.</strong></div>';
    return;
  }
  const d = documents[id];
  if(!d){
    result.innerHTML = '<div class="invalid"><strong>Document not found.</strong><br>The document number could not be verified. Please check the number and try again.</div>';
    return;
  }
  result.innerHTML = `<div class="valid"><strong>✓ Document Verified — ${d.status}</strong>
  <p><strong>Document No.:</strong> ${id}<br>
  <strong>Document Type:</strong> ${d.type}<br>
  <strong>Issued To:</strong> ${d.name}<br>
  <strong>Position:</strong> ${d.position}<br>
  <strong>Issue Date:</strong> ${d.issueDate}</p>
  ${d.pdf ? `<a class="button primary" href="${d.pdf}" target="_blank" rel="noopener">View Original Document</a>` : ""}</div>`;
}

const params = new URLSearchParams(location.search);
if(params.get("doc")){
  document.getElementById("docNo").value = params.get("doc");
  verifyDocument();
}
