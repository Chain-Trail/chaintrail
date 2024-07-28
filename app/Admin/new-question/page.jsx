// Admin/page.js
import CreateQuest from './CreateQuest';
import CreateQuestQuestion from './CreateQuestQuestions';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <CreateQuest />
      <CreateQuestQuestion />
    </div>
  );
}
