import { Vue ,Component } from 'vue-property-decorator';
import style from './app.module.scss';
@Component
export default class App extends Vue{
	render(){
		return (
			<div class={style.app}>
                <router-view></router-view>
            </div>
		)
	}
}