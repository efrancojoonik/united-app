/* eslint-disable react/prop-types */
import images from 'assets/images'
import Button from 'components/button/Button'
import InputField from 'components/InputField/InputField'
import React from 'react'
import './bookForm.css'

const BookForm = () => {
  const Group = ({ children }) => (
    <div className='book-form__fields-group'>{children}</div>
  )
  const Separator = () => <span className='book-form__separator' />
  return (
    <div className='book-form card-border'>
      <div className='card-content'>
        <Group>
          <InputField label='Pick Up Date' type='date' icon={images.calendar} />
          <InputField label='Time' type='time' icon={images.clock} />
          <InputField label='Drop Of Date' type='date' icon={images.calendar} />
          <InputField label='Time' type='time' icon={images.clock} />
        </Group>
        <Separator />
        <div className='row-gap'>
          <InputField label='Pick Up Location' type='date' icon={images.pin} />
          <InputField label='Drop Of Location' type='date' icon={images.pin} />
        </div>
        <Separator />
        <p className='book-form__resume-price'>
          $99.99<span className='book-form__price-time'>/DAY</span>
        </p>
      </div>
      <div className='book-form__actions'>
        <Button>Book Now</Button>
        <Button secondary>Add To Itinerary</Button>
      </div>
    </div>
  )
}

export default BookForm
