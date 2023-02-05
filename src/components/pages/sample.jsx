import React from 'react'
import jsPDF from 'jspdf'
import logo from '../../images/naruto.jpg';
function Sample() {

    const pdfGenerator = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(logo, 'jpg', 65, 20, 500, 400)
        doc.addPage()
        doc.setFont('Hevertica', 'bold')
        doc.text(60, 60, 'Name')
        doc.text(60, 80, 'Email')
        doc.save('naruto.pdf');
    }
    return (
        <div>
            <div className='text-center'>
                <button className='btn-success' onClick={() => pdfGenerator()}>Download</button>
            </div>
        </div>
    )
}

export default Sample