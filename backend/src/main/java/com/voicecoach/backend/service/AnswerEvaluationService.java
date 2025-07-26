package com.voicecoach.backend.service;

import org.springframework.stereotype.Service;

@Service
public class AnswerEvaluationService {

    /**
     * Vyhodnotí odpoveď kandidáta na základe základných kritérií.
     * Toto je zatiaľ jednoduchý prototyp. V produkcii by si sem mohol integrovať OpenAI alebo vlastný NLP modul.
     *
     * @param answerText text odpovede od používateľa
     * @return skóre od 0.0 do 1.0
     */
    public double evaluateAnswer(String answerText) {
        if (answerText == null || answerText.trim().isEmpty()) {
            return 0.0;
        }

        int length = answerText.trim().split("\\s+").length;

        // Základná logika: čím dlhšia odpoveď, tým vyššie skóre (max 1.0)
        if (length < 5) return 0.2;
        else if (length < 10) return 0.5;
        else if (length < 20) return 0.8;
        else return 1.0;
    }
}