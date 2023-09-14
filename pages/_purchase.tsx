import Launchcard from './components/launchcard';
import Sideinfo from './components/sideinfo'
import MockOverlay from './components/mockOverlay';

export default function Purchase() {
    return (
        <div className="w-full px-4 flex flex-col gap-8 mt-8">
            <h1 className="text-grey-50 font-bold text-4xl md:text-5xl">Buy $U</h1>
            <div className="w-full flex flex-col gap-2 lg:flex-row lg:gap-4 xl:gap-8">
                <div className="flex-auto flex flex-col md:grid md:grid-cols-2 gap-4 mb-6">
                    <Launchcard
                        tier = {1}
                        tierSupply = {'████'}
                        tierPriceUsd = {' ████'}
                        tierUnlock = {'████████'}
                        saleOpen = {false}
                        sold = {'████'}
                        participants = {'███████'}
                        commit = {'████'}
                        expectedAllo = {'████'}
                    />
                    <Launchcard
                        tier = {2}
                        tierSupply = {'████'}
                        tierPriceUsd = {' ████'}
                        tierUnlock = {'████████'}
                        saleOpen = {false}
                        sold = {'████'}
                        participants = {'███████'}
                        commit = {'████'}
                        expectedAllo = {'████'}
                    />
                    <Launchcard
                        tier = {3}
                        tierSupply = {'████'}
                        tierPriceUsd = {' ████'}
                        tierUnlock = {'████████'}
                        saleOpen = {false}
                        sold = {'████'}
                        participants = {'███████'}
                        commit = {'████'}
                        expectedAllo = {'████'}
                    />
                    <Launchcard
                        tier = {4}
                        tierSupply = {'████'}
                        tierPriceUsd = {' ████'}
                        tierUnlock = {'████████'}
                        saleOpen = {false}
                        sold = {'████'}
                        participants = {'███████'}
                        commit = {'████'}
                        expectedAllo = {'████'}
                    />
                </div>
                <Sideinfo />
            </div>
            <MockOverlay />
        </div>
    );
}