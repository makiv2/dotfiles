import '../styles/system.css'

const System = () => {
    return (
        <div className={"general"}>
            <div className={"general__div"}>
                <hr className={"line__top"}></hr>
                <h1>System Settings</h1>

                <h2>Trackpad</h2>
                <ul>
                    <li>Point & Click
                        <ul>
                            <li>Disable force click and haptic feedback</li>
                            <li>Enable tap to click</li>
                        </ul>
                    </li>
                    <li>Scroll & Zoom
                        <ul>
                            <li>Check all</li>
                        </ul>
                    </li>
                </ul>

                <h2>Dock</h2>
                <ul>
                    <li>Visual Settings
                        { /* Picture of sliders */}
                    </li>
                </ul>

                <h2>Finder</h2>
                <ul>
                    <li>General
                        <ul>
                            <li>Change new widow to home folder</li>
                        </ul>
                    </li>
                    <li>Sidebar
                        <ul>
                            <li>
                                Add home folder to sidebar
                            </li>
                            <li>
                               Add repos folder to sidebar
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2>Spotlight</h2>
                <ul>
                    <li>
                        Remove and replace with Alfred
                    </li>
                </ul>

                <h2>Defaults</h2>
                <ul>
                    <li>
                        Enable repeating keys: defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false

                    </li>
                    <li>
                        Change default screenshot folder: defaults write com.apple.screencapture location /path/to/screenshots/ && killall SystemUIServer
                    </li>
                </ul>
                <hr className={"line__top"}></hr>
            </div>
        </div>
    )
}

export default System;