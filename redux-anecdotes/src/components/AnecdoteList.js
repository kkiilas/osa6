import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div style={{marginBottom: 5}}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button
          className='btn btn-secondary'
          onClick={handleClick}>
          vote
        </button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes
      .filter(anecdote => anecdote.content.toUpperCase().includes(filter.toUpperCase()))
      .sort((a1, a2) => a2.votes - a1.votes)
  })

  const vote = (id) => {
    console.log('vote', id)
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(voteFor(anecdote))
    dispatch(setNotification(`You voted '${anecdote.content}'`, 10))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <Anecdote
            anecdote={anecdote}
            handleClick={() => vote(anecdote.id)}
          />
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
