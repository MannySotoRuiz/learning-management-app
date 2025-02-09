import { SharedNotificationSettings } from "@/components/dashboard/shared-notification-settings";
import React from "react";

const TeacherSettingsPage = () => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="Teacher Settings"
        subtitle="Manage your teacher notification settings"
      />
    </div>
  );
};

export default TeacherSettingsPage;
