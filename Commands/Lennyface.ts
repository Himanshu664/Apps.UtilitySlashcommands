import {
    IHttp,
    IMessageBuilder,
    IModify,
    IModifyCreator,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { IMessage } from "@rocket.chat/apps-engine/definition/messages";
import { IRoom } from "@rocket.chat/apps-engine/definition/rooms";
import {
    ISlashCommand,
    SlashCommandContext,
} from "@rocket.chat/apps-engine/definition/slashcommands";
import { IUser } from "@rocket.chat/apps-engine/definition/users";

export class Lennyface implements ISlashCommand {
    public command: string = "lennyface";
    public i18nDescription: string = "Slash_Lennyface_Description";
    public i18nParamsExample: string = "";
    public providesPreview: boolean = false;
    public async executor(
        context: SlashCommandContext,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence
    ): Promise<void> {
        const builder = modify
            .getCreator()
            .startMessage()
            .setSender(context.getSender())
            .setRoom(context.getRoom())
            .setText("( ͡° ͜ʖ ͡°)" + context.getArguments().join(" "));

        await modify.getCreator().finish(builder);
    }
}
