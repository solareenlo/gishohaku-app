import firebase from 'firebase/app'
import 'firebase/firestore'

import {
  Button,
  InputGroup,
  Input,
  TextArea,
  Container,
} from 'sancho'
import Layout from '../../components/layout'
import BookForm from '../../components/BookForm'
import router, { withRouter } from 'next/router'
import { useState } from 'react'

// interface Book {
//   id: string
//   title: string
// }

const BooksNew = (props: any) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Layout tab={props.router.query.tab}>
      <Container>
        <BookForm onSubmit={(event, book) => {
          const db = firebase.firestore!()
          db.collection("books").add(book).then((docRef) => {
            console.log(docRef)
            // debugger
            router.push('/books')
          })
          event.preventDefault()
        }} />
        {/* <form onSubmit={(event) => {
          return false
        }} className="Form-basics">
          <InputGroup label="Title">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required placeholder="Book Title" />
          </InputGroup>
          <InputGroup
            label="Description"
            helpText="Book Description."
          >
            <TextArea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Book Description" />
          </InputGroup>
          <Button size="lg" block intent="primary">
            Submit
          </Button>
        </form>*/}
      </Container>
    </Layout >
  )
}

export default withRouter(BooksNew)
