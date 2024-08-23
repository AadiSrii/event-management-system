const PDFDocument = require('pdfkit');

function generateEventReport(event) {
  const doc = new PDFDocument();
  let buffers = [];
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    return Buffer.concat(buffers);
  });

  doc.fontSize(20).text(`Event Report: ${event.name}`, { align: 'center' });
  doc.fontSize(16).text(`Description: ${event.description}`);
  doc.fontSize(16).text(`Date: ${event.date.toDateString()}`);

  doc.moveDown();

  event.sessions.forEach((session) => {
    doc.fontSize(18).text(`Session: ${session.title}`);
    doc.fontSize(14).text(`Speaker: ${session.speaker}`);

    if (session.participants && session.participants.length > 0) {
      doc.fontSize(14).text('Participants:', { underline: true });

      session.participants.forEach((participant) => {
        doc.fontSize(12).text(`- ${participant.name} (${participant.email})`);
      });
    } else {
      doc.fontSize(12).text('No participants registered for this session.');
    }

    doc.moveDown();
  });

  doc.end();

  return Buffer.concat(buffers);
}

module.exports = { generateEventReport };
