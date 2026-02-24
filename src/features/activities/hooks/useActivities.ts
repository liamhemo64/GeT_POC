import { useMemo } from 'react';
import { activities } from '../../../constants/mockData';
import type { Activity } from '../../../constants/mockData';

export function useActivities(filterTags?: string[]) {
  const filteredActivities = useMemo(() => {
    if (!filterTags || filterTags.length === 0) {
      return activities;
    }
    return activities.filter((activity) =>
      activity.tags.some((tag) => filterTags.includes(tag))
    );
  }, [filterTags]);

  return {
    data: filteredActivities,
    isLoading: false,
  };
}
