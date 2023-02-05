import './App.css';
import { GlobalStyles } from './styles/global';
import jsPDF from 'jspdf'
import naruto from '../src/images/641612.jpg'

function App() {

  const pdfGenerator = () => {
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    doc.addImage(naruto, 'PNG', 65, 20, 500, 400)
    doc.addPage()
    doc.setFont('Hevertica', 'bold')
    doc.text(60, 60, 'Name')
    doc.text(60, 80, 'Email')
    doc.save('naruto.pdf');
  }


  return (
    <div>
      <GlobalStyles />
      <div className='d-flex align-items-center justify-content-center vh-100'>
        <button className='btn-success' onClick={() => pdfGenerator()}>Download</button>
      </div>
    </div>
  );
}

export default App;
