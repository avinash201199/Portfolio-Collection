import { defineStore } from 'pinia'

const theme = {
	LIGHT: 'light',
	DARK: 'dark',
	BG_LIGHT: '#FFFFFF',
	BG_DARK: '#181818',
	COLOR_DARK: '#FFFFFF',
	COLOR_LIGHT: '#353535',
}
function checkTheme(){
	return localStorage.getItem('theme') === theme.LIGHT ?
		[localStorage.getItem('theme'), theme.BG_LIGHT, theme.COLOR_LIGHT] :
		['dark', theme.BG_DARK, theme.COLOR_DARK]
}
export const useThemeStore = defineStore('theme',{
	state: () => ({
		currentTheme: checkTheme()[0],
		bgColor: checkTheme()[1],
		color: checkTheme()[2],
	}),
	actions: {
		switchTheme() {
			if(this.currentTheme === theme.LIGHT){
				this.currentTheme = theme.DARK
				this.bgColor = theme.BG_DARK
				this.color = theme.COLOR_DARK
				localStorage.setItem('theme', theme.DARK)
			}else{
				this.currentTheme = theme.LIGHT
				this.bgColor = theme.BG_LIGHT
				this.color = theme.COLOR_LIGHT
				localStorage.setItem('theme', theme.LIGHT)
			}
		}
	}
})
