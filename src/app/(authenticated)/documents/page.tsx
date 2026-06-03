import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { FileUploadZone } from "@/components/upload/file-upload-zone";

export default function DocumentsPage() {
  return (
    <DashboardShell>
      <FileUploadZone />
    </DashboardShell>
  );
}
