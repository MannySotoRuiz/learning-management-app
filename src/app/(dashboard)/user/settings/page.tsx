import { SharedNotificationSettings } from "@/components/dashboard/shared-notification-settings";
import React from "react";

const UserSettingsPage = () => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="User Settings"
        subtitle="Manage your user notification settings"
      />
    </div>
  );
};

export default UserSettingsPage;
