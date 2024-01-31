export const authOptions = {
  providers: [
    // TODO: Add GoogleProvider & CredentialsProvider
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // TODO: Add jwt, session, signIn callbacks
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/login",
  },
};
