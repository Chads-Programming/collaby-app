"use client";

import {
  useUploadThing,
} from "@/lib/uploadthing";
import { cn } from "@/lib/utils";

interface UploaderProps {
  onClientUploadComplete: (res: { url: string }[]) => void;
  onUploadError: (error: Error) => void;
  children: React.ReactNode;
  className: string;
  isUploadingText?: boolean;
}

export default function Uploader({ onClientUploadComplete, onUploadError, children, className, isUploadingText = true }: UploaderProps) {
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete,
    onUploadError
  });

  return (
    <>
      <label htmlFor="file-upload" className={cn(isUploading && 'animate-pulse', "flex justify-center flex-col items-center", className)}>
        {children}

        {isUploading && isUploadingText && <span>Uploading...</span>}
      </label>
      <input
        id="file-upload"
        accept="image/*"
        hidden
        type="file"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          // Do something with files

          // Then start the upload
          await startUpload([file]);
        }}
      />
    </>

  )
}
