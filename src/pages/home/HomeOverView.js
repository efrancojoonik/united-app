import images from 'assets/images'
import BookForm from 'components/book-form/BookForm'
import CardText from 'components/card-text/CardText'
import TabHeader from 'components/tabs/TabHeader'
import React from 'react'

const HomeOverView = () => {
  const content = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida vehicula velit, quis sagittis dui.
        Ut ac dictum justo. Vestibulum consequat neque mattis turpis efficitur, et tempor arcu feugiat. Morbi
        quam tortor, dapibus et turpis malesuada, ultrices suscipit nibh.`,
    `Aliquam vitae velit consectetur, maximus quam ac, sollicitudin nulla. Proin pellentesque tincidunt
        erat ut pharetra. Praesent at augue elit. Sed condimentum eget nisi sit amet pellentesque. Donec
        hendrerit consectetur sem at euismod. Duis convallis velit metus, a rutrum arcu bibendum`
  ]

  return (
    <div className='home__overview'>
      <div className='container home__columns'>
        <div className='home__left-column row-gap'>
          <TabHeader tabs={['Overview', 'details', 'map']} />
          <CardText title='Highlights' content={content} icon={images.star} />
          <CardText
            title='Description'
            content={content}
            icon={images.pinReverse}
          />
        </div>
        <div className='home__right-column'>
          <div className='home__book-form'>
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeOverView
