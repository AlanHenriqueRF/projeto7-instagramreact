import Stories from "./Components body/Stories"
import Posts from "./Components body/Posts"
import Sidebar from "./Components body/Sidebar"

export default function Body() {
    return (<div class="corpo">
        <div class="esquerda">
            <Stories />

            <Posts />
        </div>

        <Sidebar />
    </div>)
}