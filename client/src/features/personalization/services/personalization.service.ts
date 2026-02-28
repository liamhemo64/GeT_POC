import { apiClient } from '../../../core/api/client';
import { WizardData } from '../types/wizard.types';

export const PersonalizationService = {
  /**
   * Submits the completed wizard onboarding data to the backend.
   * @param data The 10-step wizard state
   */
  submitWizardData: async (data: WizardData) => {
    try {
      // Points to http://localhost:3000/api/personalization/submit
      const response = await apiClient.post('/personalization/submit', data);
      return response.data;
    } catch (error) {
      console.error('Failed to submit personalization data:', error);
      throw error;
    }
  },

  /**
   * Fetches previously saved wizard data for a user (if they are returning).
   */
  getWizardPreferences: async () => {
    try {
      const response = await apiClient.get<WizardData>('/personalization/preferences');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user preferences:', error);
      throw error;
    }
  }
};
