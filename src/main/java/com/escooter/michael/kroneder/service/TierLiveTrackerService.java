package com.escooter.michael.kroneder.service;

import com.escooter.michael.kroneder.entity.TierTracker;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface TierLiveTrackerService {

    Mono<TierTracker> save(TierTracker count);

    Flux<TierTracker> getAll();

}

