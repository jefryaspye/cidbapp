
export interface HistoryEntry {
  timestamp: string;
  action: string;
  actor: string;
}

export interface WhatsAppMessage {
  id: string;
  sender: 'System' | 'Agent' | 'Requester';
  text: string;
  timestamp: string;
  isIncoming: boolean;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed' | 'Escalated';
  category: 'HVAC' | 'Electrical' | 'Plumbing' | 'Security' | 'IT' | 'General' | 'Safety' | 'M&E' | 'Toilet & Hygiene' | 'Building Related';
  compliance?: string[];
  aiAnalysis?: string;
  createdAt: string;
  history?: HistoryEntry[];
  whatsappThread?: WhatsAppMessage[];
  assetId?: string;
  location?: string;
  assignedTo?: string;
  requester?: string;
  vendorDetails?: {
    vendorName: string;
    actionType: 'Escalation' | 'Project';
    costEstimate?: number;
    timeline?: string;
    notes?: string;
    assignedDate: string;
  };
  resolutionDetails?: {
    resolvedBy: string;
    resolvedAt: string;
    notes: string;
    finalCost?: number;
    resolutionType?: string;
    laborHours?: number;
  };
}

export interface Asset {
  id: string;
  name: string;
  category: 'HVAC' | 'Electrical' | 'Plumbing' | 'IT' | 'Safety' | 'General';
  location: string;
  model: string;
  serialNumber: string;
  manufacturer?: string;
  supplier?: string;
  warrantyExpiryDate?: string;
  installDate: string;
  purchaseCost: number;
  status: 'Operational' | 'Maintenance' | 'Down' | 'Retired';
  healthScore: number;
  lastServiceDate: string;
  nextServiceDate: string;
  specifications: Record<string, string>;
  maintenanceHistory: HistoryEntry[];
  autoReminder?: boolean;
}

export enum GeminiModel {
  FLASH = 'gemini-2.5-flash',
  PRO_THINKING = 'gemini-3-pro-preview',
  IMAGE_GEN = 'gemini-3-pro-image-preview',
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'system' | 'subsystem' | 'component';
  children?: ArchitectureNode[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: number;
  isThinking?: boolean;
}

export type AspectRatio = '1:1' | '3:4' | '4:3' | '9:16' | '16:9';

export const COMPLIANCE_STANDARDS = [
  "ISO 41001 (FM)",
  "ISO 55001 (Asset)",
  "OSHA 1910",
  "NFPA 101 (Life Safety)",
  "BOMBA (Fire Services Act 1988)",
  "DOSH (FMA 1967)",
  "CIDB FM01"
];

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider: 'system';
  role?: 'Admin' | 'Manager' | 'Technician';
}

export interface SystemUser {
  email: string; // Key
  passwordHash: string;
  encryptedProfile: string; // AES-GCM Encrypted Blob
  role: 'Admin' | 'Manager' | 'Technician';
  status: 'Active' | 'Disabled';
  lastLogin: string;
}
