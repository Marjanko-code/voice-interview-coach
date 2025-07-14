package com.voicecoach.backend.controller;

import com.voicecoach.backend.model.Question;
import com.voicecoach.backend.service.QuestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.findAll();
    }

    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return questionService.save(question);
    }

    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id) {
        questionService.deleteById(id);
    }
}


