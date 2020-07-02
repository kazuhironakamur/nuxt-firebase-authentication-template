export default function ({ route, store, redirect }) {
  // indexページへのアクセスは認証なしで許可する
  if (!(route.name === 'index')) {
    const authenticated = store.getters['auth/getAuthenticated']
    if (!authenticated) {
      return redirect('/')
    }
  }
}
