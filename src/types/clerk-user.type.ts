export interface unsafe_clerk_user {
  id: string;
  object: string;
  username: string;
  first_name: string;
  last_name: null;
  image_url: string;
  has_image: boolean;
  primary_email_address_id: string;
  primary_phone_number_id: null;
  primary_web3_wallet_id: null;
  password_enabled: boolean;
  two_factor_enabled: boolean;
  totp_enabled: boolean;
  backup_code_enabled: boolean;
  email_addresses: EmailAddress[];
  external_accounts: ExternalAccount[];
  external_id: null;
  last_sign_in_at: number;
  banned: boolean;
  locked: boolean;
  lockout_expires_in_seconds: null;
  verification_attempts_remaining: number;
  created_at: number;
  updated_at: number;
  delete_self_enabled: boolean;
  create_organization_enabled: boolean;
  last_active_at: number;
  mfa_enabled_at: null;
  mfa_disabled_at: null;
  profile_image_url: string;
}

interface EmailAddress {
  id: string;
  object: string;
  email_address: string;
  reserved: boolean;
  verification: Verification;
  linked_to: LinkedTo[];
  created_at: number;
  updated_at: number;
}

interface LinkedTo {
  type: string;
  id: string;
}

interface Verification {
  status: string;
  strategy: string;
  attempts: null;
  expire_at: number | null;
}

interface ExternalAccount {
  object: string;
  id: string;
  provider: string;
  identification_id: string;
  provider_user_id: string;
  approved_scopes: string;
  email_address: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  image_url: string;
  username: string;
  label: null;
  created_at: number;
  updated_at: number;
  verification: Verification;
}
