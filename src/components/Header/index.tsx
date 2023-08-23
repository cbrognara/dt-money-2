import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/ignite-logo.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewtransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt='' />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewtransactionModal />
                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}