import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await searchGithub();
        setCandidates(response);
      } catch (err) {
        setError('Failed to fetch candidates');
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const saveCandidate = () => {
    if (candidates[currentIndex]) {
      const updatedSavedCandidates = [...savedCandidates, candidates[currentIndex]];
      setSavedCandidates(updatedSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
    }
    showNextCandidate();
  };

  const showNextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setError('No more candidates available');
    }
  };

  if (loading) {
    return <div>Loading candidates...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const currentCandidate = candidates[currentIndex];

  return (
    <div>
      <h1 className="title">Candidate Search</h1> {/* Title outside of Flexbox */}
      <div className="candidate-list"> {/* Flexbox container for card */}
        {currentCandidate ? (
          <CandidateCard
            avatar={currentCandidate.avatar_url}
            name={currentCandidate.name || currentCandidate.login}
            username={currentCandidate.login}
            location={currentCandidate.location || 'Location not available'}
            email={currentCandidate.email || 'Email not available'}
            company={currentCandidate.company || 'Company not available'}
            bio={currentCandidate.bio || 'Bio not available'}
            onSave={saveCandidate}
            onSkip={showNextCandidate}
          />
        ) : (
          <div>No more candidates available</div>
        )}
      </div>
    </div>
  );
};

export default CandidateSearch;