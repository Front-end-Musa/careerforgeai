export function mapFirebaseAuthError(code: string): string {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered.';
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/weak-password':
      return 'Password must be at least 6 characters.';
    case 'auth/user-not-found':
      return 'No account found with this email.';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Incorrect password.';
    case 'auth/invalid-login-credentials':
      return 'Incorrect email or password.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Check your connection.';
    case 'auth/account-exists-with-different-credential':
      return 'This email already exists. Sign in with your existing method to connect this provider.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in was cancelled. You can try again when ready.';
    case 'auth/popup-blocked':
      return 'The sign-in popup was blocked. Allow popups for this site and try again.';
    case 'auth/cancelled-popup-request':
      return 'Another sign-in popup is already open.';
    case 'auth/provider-already-linked':
      return 'This provider is already connected to your account.';
    case 'auth/credential-already-in-use':
      return 'This provider is already connected to another account.';
    default:
      return 'Authentication failed. Please try again.';
  }
}
