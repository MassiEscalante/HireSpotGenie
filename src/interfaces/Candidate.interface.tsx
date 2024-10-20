// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  id: number;
  avatar_url: string;
  login: string;  // This is the GitHub username (login)
  name?: string;  // Optional name
  location?: string;  // Optional location
  email?: string;  // Optional email
  company?: string;  // Optional company
  bio?: string;  // Optional bio
}
