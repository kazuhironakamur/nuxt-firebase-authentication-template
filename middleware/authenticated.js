export default function ({ route, store, redirect }) {
  // indexページへのアクセスは認証なしで許可する
  if (!(route.name === 'index')) {
    const authenticated = store.getters['auth/get_authenticated']
    if (!authenticated) {
      return redirect('/')
    }
  }
}
