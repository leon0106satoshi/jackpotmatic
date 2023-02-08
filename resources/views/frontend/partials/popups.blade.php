<!-- UNIT WITH POPP WINDOWS, BEGINNING -->
<!-- POPUP REGISTRATION AND AUTHORIZATION -->
<!-- <div class="modal" id="login-modal" style="display: none">
    <header class="modal__header">
        <div class="span modal__title">Sign in to start your session</div>
        <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
    </header>
    <form ng-submit="sendForm($event)" action="<?= route('frontend.auth.login.post') ?>" method="POST" 
		data-modal-success="#login-modal">
        <input type="hidden" value="<?= csrf_token() ?>" name="_token">
        <div class="modal__content">
            <div class="modal__input input">
                <input placeholder="Username" type="text" name="username" class="modal__input-inner input__inner">
            </div>
            <div class="modal__input input">
                <input placeholder="Password" type="password" name="password" class="modal__input-inner input__inner">
                @if (settings('forgot_password'))
                    <span class="modal__caption" ng-click="openModal($event, '#restore-password')">
                        Forgot Your Password? </span>
                @endif
            </div>
            <div class="modal__error" style="display: none"></div>
        </div>
        <div class="popup__footer">
            <input type="submit" value="Iniciar Sesion" class="popup__button button" />
            <input type="hidden" value="/" name="is_ajax" id="is_ajax" />
        </div>
    </form>
    <div class="modal-preloader" style="display:none"></div>
</div>-->

<!-- POPUP REGISTRATION AND AUTHORIZATION -->
<!-- POPUP RECOVER PASSWORD -->
@if (settings('forgot_password'))
    <div class="modal" id="restore-password" style="display: none">
        <header class="modal__header">
            <div class="span modal__title">Restore Password</div>
            <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </header>
        <form ng-submit="sendForm($event)" action="<?= route('frontend.password.remind.post') ?>" method="POST"
            data-modal-success="#restore-password-success">
            <div class="modal__content">
                <div class="modal__input input input-restore-email">
                    <input type="text" name="reset_email" required class="modal__input-inner input__inner"
                        placeholder="Email">
                </div>
                <div class="modal__error" style="display:none"></div>
            </div>
            <div class="popup__footer">
                <input type="submit" value="Request new password" class="popup__button button" />
            </div>
        </form>
        <div class="modal-preloader" style="display:none"></div>
    </div>
@endif
<!-- POPUP RECOVER PASSWORD -->
<!-- POPUP RECOVER PASSWORD INFO WINDOW -->
@if (settings('forgot_password'))
    <div class="modal" id="restore-password-success" style="display:none">
        <header class="modal__header">
            <div class="span modal__title">System notification</div>
            <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </header>
        <div class="modal__content">
            <div id="restore-password-success-text" class="modal-text">Your password has been sent to your
                mail<br />Good luck in the games!</div>
        </div>
        <div class="popup__footer">
            <input ng-click="closeModal($event)" type="submit" value="Close" class="popup__button button" />
        </div>
    </div>
@endif
<!-- POPUP RECOVER PASSWORD INFO WINDOW -->
<!-- POPUP REGISTRATION -->
@if (settings('reg_enabled'))
    <div class="modal" id="registration-confirm" style="display: none">
        <header class="modal__header">
            <div class="span modal__title">REGISTRAR UNA NUEVA MEMBRESÍA</div>
            <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </header>
        <form method="post" action="<?= route('frontend.register.post') ?>" ng-submit="sendForm($event)" data-modal-success="#system-notification-success">
            <div class="modal__content">
				<div class="row">
					<div class="modal__input input">
						<input type="text" id="username" name="username" placeholder="@lang('app.username')" class="modal__input-inner input__inner">
					</div>
					<div class="modal__input input">
						<input placeholder="@lang('app.email')" type="text" name="email" class="modal__input-inner input__inner">
					</div>
				</div>
				<div class="row">
					<div class="modal__input input">
						<input placeholder="@lang('app.password')" type="password" name="password"
							class="modal__input-inner input__inner">
					</div>
					<div class="modal__input input">
						<input type="password" id="password_confirmation" name="password_confirmation" placeholder="@lang('app.confirm_password')" 
							class="modal__input-inner input__inner">
					</div>
                </div>
                {{-- <div class="registration__checkbox checkbox">
                    <input type="checkbox" id="rules" name="tos" id="tos" value="1" checked="checked"
                        class="checkbox__inner">
                    <label for="rules" class="checkbox__label">Me gustaría recibir noticias y promociones
                        especiales.</label>
                </div>
                <div class="registration__checkbox checkbox">
                    <input type="checkbox" id="rules" name="tos" id="tos" value="1" checked="checked"
                        class="checkbox__inner">
                    <label for="rules" class="checkbox__label">Me gustaría recibir ofertas exclusivas por
                        WhatsApp/SMS</label>
                </div> --}}
                <div class="registration__checkbox checkbox">
                    <input type="checkbox" id="rules" name="tos" id="tos" value="1" checked="checked"
                        class="checkbox__inner">
                    <label for="rules" class="checkbox__label">Soy mayor de 18 años y he leído y acepto los términos y
                        condiciones. <a class="terms-breakdown terms-link tc">Términos y condiciones</a></label>
                </div>
                <div class="modal__error" style="display: none"></div>
            </div>
            <div class="popup__footer">
                <input type="submit" value="Registrarse" class="popup__button button" />
            </div>
        </form>
        <div class="modal-preloader" style="display:none"></div>
    </div>
@endif
<!-- POPUP REGISTRATION -->



<!-- POPUP CHANGE PASSWORD -->
<div class="modal popup_changePassword" id="change-password" style="display: none">
    <header class="modal__header">
        <div class="span modal__title">
            Change password </div>
        <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
    </header>
    <form ng-submit="sendForm($event)" action="<?= route('frontend.profile.update.password') ?>" method="POST"
        data-modal-success="#password-changed">
        <div class="modal__content">
            <div class="popup__input input">
                <input type="password" name="old_password" required class="modal__input-inner input__inner"
                    placeholder="Current password">
            </div>
            <div class="popup__input input">
                <input type="password" name="password" required class="modal__input-inner input__inner"
                    placeholder="New Password">
            </div>
            <div class="popup__input input">
                <input type="password" name="password_confirmation" required class="modal__input-inner input__inner"
                    placeholder="Confirm Password">
            </div>
            <div class="modal__error" style="display:none">
                <div class="modal__note_important"></div>
            </div>
        </div>
        <div class="popup__footer">
            <input type="submit" value="Change" class="popup__button button" />
        </div>
    </form>
    <div class="modal-preloader" style="display:none"></div>
</div>

<div class="modal" id="password-changed" style="display:none">
    <header class="modal__header">
        <div class="span modal__title">System notification</div>
        <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
    </header>
    <div class="modal__content">
        <div class="modal-text">Your password has been changed <br />Good luck in the games!</div>
    </div>
    <div class="popup__footer">
        <input ng-click="closeModal($event)" type="submit" value="Close" class="popup__button button" />
    </div>
</div>
<!-- POPUP CHANGE PASSWORD -->


<div class="modal" id="system-notification-success" style="display:none">
	<header class="modal__header">
		<div class="span modal__title">System notification</div>
		<span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
	</header>
	<div class="modal__content">
		<div id="system-notification-success-text" class="modal-text"></div>
	</div>
	<div class="popup__footer">
		<input ng-click="closeModal($event)" type="submit" value="Close" class="popup__button button" />
	</div>
</div>