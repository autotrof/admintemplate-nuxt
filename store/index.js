export const state = () => ({
  page_title: "APLIKASI YAYASAN",
  page_title_icon: null
})

export const getters = {
  getPageTitle(state) {
    return {page_title:state.page_title,page_title_icon:state.page_title}
  }
}

export const mutations = {
  changePageTitle(state,data) {
    state.page_title = data.title
    state.page_title_icon = data.icon
  }
}

export const actions = {
  async fetchData(){
    return null
  },
  async logout(){
    console.log("LOGOUT GUYS")
    return true
  }
}