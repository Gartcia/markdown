import logo from '../assets/logo192.png'
import '../stylesheets/Editor.css'

function Editor(props) {
    function handleBtn() {
        const editorButton = document.getElementById("editor-button")
        const previewerContainer = document.getElementById("previewer-container")
        const editor = document.getElementById("editor")
        editorButton.classList.toggle("rotate");
        previewerContainer.classList.toggle("d-none");
        if (editor.getAttribute("rows") === "10"){
            editor.setAttribute("rows", "30")
        } else {
            editor.setAttribute("rows", "10")
        }
    }
    return (
        <div id="editor-container" className='container shadow-sm p-0'>
          <div className="p-1 w-100 d-flex justify-content-between align-items-center bg-light px-3">
              <div className="d-flex justify-content-center align-items-center">
                  <img className='logo' src={logo} alt="logo" />
                  <p className="fw-bold text-capitalize px-1 m-0">editor</p>
              </div>
              <button id='editor-button' className="bi bi-caret-down-square-fill fs-5 link-info btn p-0" onClick={() => handleBtn()}></button>
          </div>
          <div className='w-100 p-0 border border-dark'>
              <textarea
              id="editor" className="border-0 w-100 d-block" rows="10"
          value={props.input}
          onChange={props.handleChange}/>
          </div>
        </div>
    );
  }

  export default Editor;