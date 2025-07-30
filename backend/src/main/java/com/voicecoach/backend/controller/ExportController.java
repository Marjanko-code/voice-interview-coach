package com.voicecoach.backend.controller;

import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.voicecoach.backend.model.Result;
import com.voicecoach.backend.service.ResultService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/results/export")
@CrossOrigin(origins = "http://localhost:3000")
public class ExportController {

    private final ResultService resultService;

    public ExportController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping("/pdf")
    public void exportResultsAsPDF(HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=results.pdf");

        PdfWriter writer = new PdfWriter(response.getOutputStream());
        PdfDocument pdf = new PdfDocument(writer);
        Document document = new Document(pdf);

        document.add(new Paragraph("Voice Interview Results Report 🧾").setBold().setFontSize(16));

        List<Result> results = resultService.getAllResults();

        for (Result result : results) {
            String line = String.format("Candidate: %s | Question: %s | Answer: %s | Score: %d",
                    result.getCandidateName(),
                    result.getQuestionText(),
                    result.getAnswerText(),
                    result.getScore());

            document.add(new Paragraph(line));
        }

        document.close();
    }
}

