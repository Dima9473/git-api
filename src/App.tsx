import React, { FormEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getGitData } from './scripts/app';
import GitRepos from './components/GitRepos/GitRepos';

function App() {
  const [value, setValue] = useState<string>('')
  const [repos, setRepos] = useState<any[]>([])
  const [isRequestSended, setIsRequestSended] = useState<boolean>(false)

  const handleInputChange = (value: FormEvent<HTMLInputElement>) => {
    setValue(value.currentTarget.value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = await getGitData(value)
    setRepos(data)
    setIsRequestSended(true)
  }

  return (
    <div className="App">
      <h3>GitHub API</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input className='gitName' type="text" placeholder="GitHub Username" value={value} onChange={handleInputChange} />
        <input type="submit" value="Submit" />
      </form>
      {isRequestSended && !repos?.length && <p><strong>No account exists with username:</strong> {value}</p>}
      {isRequestSended && repos?.length && <p><strong>Number of Public Repos:</strong> {repos.length}</p>}
      <GitRepos repos={repos} />
    </div>
  );
}

export default App;
