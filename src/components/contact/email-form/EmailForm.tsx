import { FC, useRef, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'
import * as yup from 'yup'

import preloader from '../../../assets/img/preloader.png'

import { response } from '../../../assets/data/response-popup.data'

import { SubmitHandler, useForm } from 'react-hook-form'

import { ResponsePopUp } from '../response-popup/ResponsePopUp'

import styles from './EmailForm.module.scss'

const schema = yup
  .object({
    user_name: yup.string().min(3).max(20).required(),
    user_email: yup.string().min(6).max(30).email().required(),
    message: yup.string().min(6).max(300).required(),
  })
  .required()
type FormData = yup.InferType<typeof schema>

export const EmailForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const form = useRef<HTMLFormElement>(null)

  const sendEmail: SubmitHandler<FormData> = async (data, e) => {
    e?.preventDefault()
    try {
      setIsSending(true)
      const result = await emailjs.sendForm(
        'service_mbep5gn',
        'template_89a0a2j',
        form.current as HTMLFormElement | string,
        '8B1xDbCLs9YVO8sH4'
      )

      if (result.text === 'OK') {
        setStatus('ok')
        reset()
      }
    } catch (error: any) {
      setStatus('error')
      console.warn(error)
    }

    setIsSending(false)
    setTimeout(() => setStatus(null), 10000)
  }

  return (
    <form ref={form} className={styles.root} onSubmit={handleSubmit(sendEmail)}>
      <div className={styles.input_container}>
        <label htmlFor='name'>NAME:</label>

        <input
          type='text'
          placeholder='Your name *'
          {...register('user_name')}
        />

        {errors.user_name && (
          <span className={styles.error}>{errors.user_name.message}</span>
        )}
      </div>

      <div className={styles.input_container}>
        <label htmlFor='email'>E-MAIL:</label>

        <input
          type='email'
          placeholder='Your email address *'
          {...register('user_email')}
        />

        {errors.user_email && (
          <span className={styles.error}>{errors.user_email.message}</span>
        )}
      </div>

      <div className={styles.textarea}>
        <textarea
          placeholder='Enter your message...'
          {...register('message')}
        />

        {errors.message && (
          <div className={styles.error}>{errors.message.message}</div>
        )}

        <button disabled={isSending} className={styles.submit} type='submit'>
          {isSending ? <img src={preloader} alt='preloader' /> : 'submit'}
        </button>
      </div>

      {status === 'ok' ? (
        <ResponsePopUp
          status={status}
          icon={response[0].icon}
          title={response[0].title}
          message={response[0].message}
        />
      ) : (
        status === 'error' && (
          <ResponsePopUp
            status={status}
            icon={response[1].icon}
            title={response[1].title}
            message={response[1].message}
          />
        )
      )}
    </form>
  )
}
