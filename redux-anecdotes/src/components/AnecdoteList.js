import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>
          vote
        </button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state).sort((a1, a2) => a2.votes - a1.votes)

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <Anecdote
            anecdote={anecdote}
            handleClick={() =>
              dispatch(vote(anecdote.id))}
          />
        </div>
      )}
    </>
  )
}

export default AnecdoteList