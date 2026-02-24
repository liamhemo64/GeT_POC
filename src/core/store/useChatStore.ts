import { create } from 'zustand';
import { Message } from '../../features/chat/types';
import { ChatService } from '../services/ChatService';
import { useFavoritesStore } from './useFavoritesStore';
import { activities } from '../../constants/mockData';

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  addMessage: (content: string, role: 'user' | 'model') => void;
  sendMessage: (content: string) => Promise<void>;
  clearHistory: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isLoading: false,

  addMessage: (content, role) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString().substring(2, 6),
      content,
      role,
      timestamp: new Date(),
    };
    set((state) => ({ messages: [...state.messages, newMessage] }));
  },

  sendMessage: async (content) => {
    const { addMessage } = get();
    
    // Add user message immediately
    addMessage(content, 'user');
    set({ isLoading: true });

    try {
      // Get favorited activities for context
      const favorites = useFavoritesStore.getState().favorites;
      let userContext = '';
      if (favorites.length > 0) {
        const likedActivities = favorites
          .map(id => activities.find(a => a.id === id))
          .filter(Boolean)
          .map(a => `- ${a!.title.en} (${a!.location.en})`);
        
        userContext = likedActivities.join('\n');
      }

      // Send to Gemini API
      const response = await ChatService.getAIResponse(content, userContext);
      
      // Delay slightly for realistic feel if it returned too fast
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Add AI response
      addMessage(response, 'model');
    } catch (error) {
      console.error('Failed to send message:', error);
      // Optional: Add an error message from the system
      addMessage('Sorry, I am having trouble connecting right now.', 'model');
    } finally {
      set({ isLoading: false });
    }
  },

  clearHistory: () => set({ messages: [] }),
}));
