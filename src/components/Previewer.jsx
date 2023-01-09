import { marked } from 'marked';
import logo from '../assets/logo192.png'
import '../stylesheets/Previewer.css'
function Previewer(props) {
    function createMarkup(){
        return {__html: marked.parse(props.input)}
    }
    function handleBtn() {
        const previewerButton = document.getElementById("previewer-button")
        const editorContainer = document.getElementById("editor-container")
        const previewerContainer = document.getElementById("previewer-container")
        const preview = document.getElementById("preview")
        previewerButton.classList.toggle("rotate");
        editorContainer.classList.toggle("d-none");
        previewerContainer.classList.toggle("min")
        preview.classList.toggle("min")
    }
    return (
     <div id="previewer-container" className='container border shadow-sm p-0 overflow-hidden bg-white'>
          <div className="p-1 w-100 d-flex justify-content-between align-items-center bg-light px-3">
              <div className="d-flex justify-content-center align-items-center">
                  <img className='logo' src={logo} alt="logo" />
                  <p className="fw-bold text-capitalize px-1 m-0">previewer</p>
              </div>
              <button id='previewer-button' className="bi bi-caret-down-square-fill fs-5 link-info btn p-0" onClick={() => handleBtn()}></button>
          </div>
          <div id="preview" className="w-100 px-3 border border-dark" dangerouslySetInnerHTML={createMarkup()}>
          </div>
      </div>
    );
}
export default Previewer;