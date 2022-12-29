"""add user table

Revision ID: 14e2debb8863
Revises: 8a06c44d54dd
Create Date: 2022-12-28 23:53:19.624768

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '14e2debb8863'
down_revision = '8a06c44d54dd'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table('users', 
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('email', sa.String(), nullable=False),
                    sa.Column('password', sa.String(), nullable=False),
                    sa.Column('created_at', sa.TIMESTAMP(timezone=True), server_default=sa.text('now()'), nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email'))
    pass


def downgrade() -> None:
    op.drop_table('users')
    pass
