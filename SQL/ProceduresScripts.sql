

CREATE PROCEDURE STP_JJ2020_USER_GET
		(@email varchar(250), @pass varchar(20))
	AS 
	BEGIN
		if @email != ''
		BEGIN
			select us.ID, us.ID_THEME, us.ID_COUNTRY, us.EMAIL, us.U_PASSWORD, us.NAME_USER, us.AGE, us.DT_CREATION, us.URL_PHOTO, co.NAME_COUNTRY
			from JJ2020_TB_USER us 
			left join  SHARED_COUNTRY co on us.ID_COUNTRY = co.ID
			where us.EMAIL = @email AND us.U_PASSWORD = @pass
		END
	END
GO

CREATE PROCEDURE STP_JJ2020_USER_INSERT
		(@id integer, @id_theme integer = null, @id_country integer = null, @email varchar(250), @u_password varchar(20), @name_user varchar(60), @age date = null, @active bit, @dt_creation datetime, @url_photo varchar(250) = null)
	AS
	BEGIN
		if @id = 0
		BEGIN
			INSERT INTO JJ2020_TB_USER
           ([ID_THEME],[ID_COUNTRY],[EMAIL],[U_PASSWORD],[NAME_USER],[AGE],[ACTIVE],[DT_CREATION],[URL_PHOTO])
			VALUES
           (@id_theme, @id_country, @email, @u_password, @name_user, @age, @active, @dt_creation, @url_photo)
		END

		if @id > 0
		BEGIN
			UPDATE JJ2020_TB_USER 
			SET ID_THEME = @id_theme, ID_COUNTRY = @id_country, EMAIL = @email, U_PASSWORD = @u_password, NAME_USER = @name_user, AGE = @age, ACTIVE = @active, DT_CREATION = @dt_creation, URL_PHOTO = @url_photo
			WHERE ID = @id
		END
	END
GO 

CREATE PROCEDURE STP_JJ2020_NOTE_GET
		(@id_user integer, @id integer)
	AS
	BEGIN
		if @id = 0
		BEGIN
			select nt.ID, nt.ID_USER, nt.ID_USER_SHARED, nt.TITLE, nt.NOTE_TEXT, nt.ACTIVE, nt.FAVORITE, nt.TAG, nt.DT_CREATION, nt.DT_EDIT
			from JJ2020_TB_NOTE nt
			where nt.ID_USER = @id_user
		END

		ELSE
		BEGIN
			select nt.ID, nt.ID_USER, nt.ID_USER_SHARED, nt.TITLE, nt.NOTE_TEXT, nt.ACTIVE, nt.FAVORITE, nt.TAG, nt.DT_CREATION, nt.DT_EDIT
			from JJ2020_TB_NOTE nt
			where nt.ID = @id and nt.ID_USER = @id_user
		END
	END
GO

CREATE PROCEDURE STP_JJ2020_NOTE_INSERT
	(@id integer, @id_user integer, @id_user_shared varchar = null, @title varchar(60), @note_text varchar(MAX) = null, @active bit, @favorite bit, @tag varchar(40) = null, @dt_creation datetime, @dt_edit datetime = null)
	AS
	BEGIN
		if @id = 0
		BEGIN
			INSERT INTO JJ2020_TB_NOTE (ID_USER, ID_USER_SHARED, TITLE, NOTE_TEXT, ACTIVE, FAVORITE, TAG,DT_CREATION, DT_EDIT)
		VALUES
           (@id_user, @id_user_shared , @title, @note_text, @active, @favorite, @tag, @dt_creation, @dt_edit)
		END

		if @id > 0
		BEGIN
			UPDATE JJ2020_TB_NOTE 
			SET ID_USER = @id_user, ID_USER_SHARED = @id_user_shared, TITLE = @title, NOTE_TEXT = @note_text, ACTIVE = @active, FAVORITE = @favorite, TAG = @tag, DT_CREATION = @dt_creation, DT_EDIT = @dt_edit
			WHERE ID = @id
		END 
	END
GO
