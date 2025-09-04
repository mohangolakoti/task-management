import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskTopBar from "../components/TaskTopbar";
import HelpCenter from "../components/HelpCenter";
import TaskSection from "../components/TaskSection";
import NewTaskSection from "../components/NewTaskSection";
import MentorSection from "../components/MentorSection";
import AllMentors from "../components/AllMentors";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("Deadline");
  const [showTasks, setShowTasks] = useState(true);
  const [showMentors, setShowMentors] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const showTaskHandler = () => {
    setShowTasks(true);
    setShowMentors(false);
  };
  const showMentorsHandler = () => {
    setShowTasks(false);
    setShowMentors(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        showTaskHandler={showTaskHandler}
        showMentorsHandler={showMentorsHandler}
      />

      <div className="flex-1 flex flex-col lg:ml-64 overflow-hidden">
        <TaskTopBar
          onMenuClick={toggleSidebar}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <main className="overflow-hidden p-4 lg:p-8 flex flex-col gap-6">
          <div>
            {showTasks && <TaskSection />}
            {showMentors && <MentorSection />}
          </div>
          <div>
            {showTasks && <NewTaskSection />}
            {showMentors && <AllMentors />}
          </div>
        </main>
      </div>

      <HelpCenter />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

export default Dashboard;
