import { withHandlers } from 'recompose'

export default compose(
  withHandlers({
    updateAccount: ({ firebase, showSuccess, showError }) => newAccount =>
      firebase
        .updateProfile(newAccount)
        .then(() => showSuccess('Profile updated successfully'))
        .catch(error => {
          showError('Error updating profile: ', error.message || error)
          console.error('Error updating profile', error.message || error) // eslint-disable-line no-console
          return Promise.reject(error)
        })
  })
)
