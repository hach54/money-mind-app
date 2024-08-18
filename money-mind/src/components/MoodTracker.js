import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState('');

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleMoodSubmit = () => {
    const lowerMood = mood.toLowerCase();

    // Extended response logic with solutions and suggestions
    let moodResponse = '';
    let suggestion = '';

    switch (true) {
      case lowerMood.includes('happy'):
        moodResponse = 'Glad to hear you are happy! Keep smiling 😊';
        suggestion = 'Here are some fun things you can do to stay happy:\n- Play a relaxing game like Stardew Valley or Animal Crossing.\n- Call a friend and share your happiness with them.\n- Listen to some uplifting music!';
        break;
      case lowerMood.includes('sad'):
        moodResponse = 'Sorry to hear you are sad. I’m here to support you 💙';
        suggestion = 'When you feel sad, try the following:\n- Play a cozy game like Journey or Gris to relax.\n- Watch a funny video or a movie that always cheers you up.\n- Talk to a friend or journal your thoughts.';
        break;
      case lowerMood.includes('angry'):
        moodResponse = 'It’s okay to feel angry sometimes. Take a deep breath and relax 😌';
        suggestion = 'Here are some ways to channel your anger constructively:\n- Play an action game like DOOM or Call of Duty to release some energy.\n- Practice deep breathing or meditation for a few minutes.\n- Go for a walk or do a quick workout to release tension.';
        break;
      case lowerMood.includes('excited'):
        moodResponse = 'Yay! Excitement is contagious! 🎉';
        suggestion = 'While you’re feeling excited, try these activities:\n- Play a party game like Mario Kart or Fall Guys with friends.\n- Share your excitement with someone who will celebrate with you.\n- Work on a creative project or start something you’ve been looking forward to!';
        break;
      case lowerMood.includes('anxious'):
        moodResponse = 'Sorry you’re feeling anxious. You’ve got this, take things one step at a time 💪';
        suggestion = 'When you’re feeling anxious, here’s what you can do:\n- Play a relaxing game like ABZÛ or Flow to calm your nerves.\n- Try some deep breathing exercises or listen to calming music.\n- Write down what’s making you anxious and break it down into smaller steps.';
        break;
      case lowerMood.includes('bored'):
        moodResponse = 'Maybe it’s time for a new adventure! Try something fun today 🌟';
        suggestion = 'Feeling bored? How about:\n- Playing a puzzle game like Portal or The Witness.\n- Starting a new hobby or learning something new online.\n- Exploring a new show or book to dive into something different!';
        break;
      case lowerMood.includes('tired'):
        moodResponse = 'Rest is important. Take care of yourself and recharge 💤';
        suggestion = 'If you’re tired, here’s what might help:\n- Play a low-stress game like Animal Crossing or Minecraft in peaceful mode.\n- Take a power nap or just relax with a book or podcast.\n- Ensure you hydrate and have a balanced snack to boost energy!';
        break;
      case lowerMood.includes('confused'):
        moodResponse = 'It’s okay to be confused sometimes. Clarity will come soon 🤔';
        suggestion = 'To clear up confusion, try these activities:\n- Play a mind-challenging game like Baba Is You or The Talos Principle.\n- Take a break and return to the task with a fresh perspective.\n- Talk to someone or write down your thoughts to organize them better.';
        break;
      case lowerMood.includes('grateful'):
        moodResponse = 'Gratitude is a powerful feeling. Stay thankful and positive 🙏';
        suggestion = 'To enhance your feeling of gratitude:\n- Play a wholesome game like Spiritfarer or Kind Words.\n- Write down three things you’re grateful for today.\n- Share your gratitude with someone who made your day better.';
        break;
      case lowerMood.includes('stressed'):
        moodResponse = 'Take a break, breathe deeply, and focus on one thing at a time. You’ll get through it 💆';
        suggestion = 'If you’re feeling stressed, these might help:\n- Play a relaxing or calming game like Journey or Flower.\n- Take a walk outside, focus on your surroundings, and breathe deeply.\n- Try organizing your tasks and tackle them one at a time.';
        break;
      case lowerMood.includes('hopeful'):
        moodResponse = 'Hope is a beautiful thing! Keep looking forward with optimism 🌅';
        suggestion = 'When you’re feeling hopeful, you could:\n- Work on a game like Stardew Valley or The Sims to build something creative.\n- Set some goals for the future and plan the steps to achieve them.\n- Share your optimism with others and encourage those around you.';
        break;
      default:
        moodResponse = 'Thank you for sharing your mood. Stay positive!';
        suggestion = 'Here are a few general suggestions to boost your mood:\n- Play a light game like Among Us or Overcooked with friends.\n- Engage in a creative hobby, whether it’s drawing, writing, or crafting.\n- Take a moment for self-care, whether it’s resting or doing something fun!';
        break;
    }

    setResponse(`${moodResponse}\n\nSuggestions:\n${suggestion}`);
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <input
        type="text"
        value={mood}
        onChange={handleMoodChange}
        placeholder="How are you feeling today?"
      />
      <button onClick={handleMoodSubmit}>Submit</button>
      <pre>{response}</pre>
    </div>
  );
};

export default MoodTracker;
