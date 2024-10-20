import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Load saved candidates from localStorage
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  // Function to remove a candidate
  const removeCandidate = (candidateId: number) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.id !== candidateId);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates)); // Update localStorage
  };

  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td><img src={candidate.avatar_url} alt={candidate.login} className="candidate-avatar" /></td>
                <td>{candidate.name || candidate.login} <em>({candidate.login})</em></td>
                <td>{candidate.location || 'Location not available'}</td>
                <td><a href={`mailto:${candidate.email}`}>{candidate.email || 'Email not available'}</a></td>
                <td>{candidate.company || 'Company not available'}</td>
                <td>{candidate.bio || 'Bio not available'}</td>
                <td>
                  <button className="reject-btn" onClick={() => removeCandidate(candidate.id)}>❌</button> {/* Reject button functionality */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No saved candidates available</div>
      )}
    </div>
  );
};

export default SavedCandidates;
