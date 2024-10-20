import React from 'react';

interface CandidateCardProps {
  avatar: string;
  name: string;
  username: string;
  location: string;
  email: string;
  company: string;
  bio: string;
  onSave: () => void; // Add this prop to handle save action
  onSkip: () => void;  // Add this prop to handle skip action
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  avatar,
  name,
  username,
  location,
  email,
  company,
  bio,
  onSave,   // Passed down save function
  onSkip,   // Passed down skip function
}) => {
  return (
    <div className="candidate-card">
      <img src={avatar} alt={`${username}'s avatar`} className="candidate-avatar" />
      <div className="candidate-details">
        <h2>{name} <em>({username})</em></h2>
        <p>Location: {location}</p>
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p>Company: {company}</p>
        <p>Bio: {bio}</p>
      </div>
      <div className="candidate-actions">
        <button className="reject-btn" onClick={onSkip}>❌</button>  {/* Update existing skip button */}
        <button className="accept-btn" onClick={onSave}>✅</button>  {/* Update existing save button */}
      </div>
    </div>
  );
};

export default CandidateCard;