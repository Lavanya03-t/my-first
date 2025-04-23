import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectCounter = createFeatureSelector<number>('count');

export const getCount = createSelector(
  selectCounter,
  (state) => state
);