package com.voicecoach.backend.controller;

import com.voicecoach.backend.model.Answer;
import com.voicecoach.backend.service.AnswerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answers")
@CrossOrigin(origins = "http://localhost:3000")
public class AnswerController {

    private final AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GetMapping
    public List<Answer> getAllAnswers() {
        return answerService.findAll();
    }

    @PostMapping
    public Answer createAnswer(@RequestBody Answer answer) {
        return answerService.save(answer);
    }

    @DeleteMapping("/{id}")
    public void deleteAnswer(@PathVariable Long id) {
        answerService.deleteById(id);
    }
}
