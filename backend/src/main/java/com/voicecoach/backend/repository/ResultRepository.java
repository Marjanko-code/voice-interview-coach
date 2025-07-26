package com.voicecoach.backend.repository;

import com.voicecoach.backend.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepository extends JpaRepository<Result, Long> {
}